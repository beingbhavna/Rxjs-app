import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility.service';
import { debounceTime, delay, distinctUntilChanged, map, pluck, switchAll, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switchmap-operator',
  templateUrl: './switchmap-operator.component.html',
  styleUrls: ['./switchmap-operator.component.css']
})
export class SwitchmapOperatorComponent implements OnInit, AfterViewInit {
  @ViewChild('searchForm') searchForm: NgForm
  listData: any;
  searchCount: number;
  constructor(private du: DesignUtilityService) { }

  ngAfterViewInit(): void {
    // this.du.getSearch('angular').subscribe(data => {
    //   console.log("mm", data);
    //   this.listData = data;
    // });

    const formValue = this.searchForm.valueChanges;
    formValue.pipe(
      // map(data => data['searchTerm'])//for multiple data
      pluck('searchTerm'), debounceTime(500), distinctUntilChanged(), switchMap(data => this.du.getSearch(data))//for small data 
    ).subscribe(res => {
      this.listData = res;
      this.searchCount = Object.keys(res).length;
      console.log(this.searchCount);
    });

  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']).pipe(delay(1000));

    //Ex - 01 (map)
    source.pipe(map(res => this.getData(res))).subscribe(res2 => {
      // console.log(res2)
      this.du.print(res2, 'elContainer')
    });

    //Ex - 02 (map + switchAll)
    source.pipe(map(res => this.getData(res)), switchAll()).subscribe(res2 => {
      console.log(res2)
      this.du.print(res2, 'elContainer1')
    });

    //Ex - 03 (switchMap)
    source.pipe(switchMap(res => this.getData(res))).subscribe(res2 => {
      console.log(res2)
      this.du.print(res2, 'elContainer2')
    });
  }

  getData(data) {
    return of(data + ' Video Uploaded');
  }

}
