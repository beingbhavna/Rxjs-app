import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, map } from 'rxjs/operators';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-concatmap-operator',
  templateUrl: './concatmap-operator.component.html',
  styleUrls: ['./concatmap-operator.component.css']
})
export class ConcatmapOperatorComponent implements OnInit {

  constructor(private du: DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // ex - 01 (map)
    source.pipe(map(ele => this.getData(ele))).subscribe(res => res.subscribe(res2 => {
      this.du.print(res2,'elContainer');
    }));

 // ex - 02 (map)+(concatAll)
    source.pipe(map(ele => this.getData(ele)),concatAll()).subscribe(res => {
      this.du.print(res,'elContainer1');
    });

 // ex - 03 (concatMap)
    source.pipe(concatMap(ele => this.getData(ele))).subscribe(res => {
      this.du.print(res,'elContainer2');
    });
  }

  getData(data) {
    return of(data + ' Video Uploaded');
  }
}
