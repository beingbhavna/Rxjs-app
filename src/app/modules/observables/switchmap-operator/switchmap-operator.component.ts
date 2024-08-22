import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility.service';
import { delay, map, switchAll, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switchmap-operator',
  templateUrl: './switchmap-operator.component.html',
  styleUrls: ['./switchmap-operator.component.css']
})
export class SwitchmapOperatorComponent implements OnInit {
  constructor(private du: DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']).pipe(delay(1000));

    //Ex - 01 (map)
    source.pipe(map(res => this.getData(res))).subscribe(res2 =>{
      // console.log(res2)
      this.du.print(res2,'elContainer')
    });

    //Ex - 02 (map + switchAll)
    source.pipe(map(res => this.getData(res)),switchAll()).subscribe(res2 =>{
      console.log(res2)
      this.du.print(res2,'elContainer1')
    });

    //Ex - 03 (switchMap)
    source.pipe(switchMap(res => this.getData(res))).subscribe(res2 =>{
      console.log(res2)
      this.du.print(res2,'elContainer2')
    });
  }

  getData(data) {
    return of(data + ' Video Uploaded');
  }

}
