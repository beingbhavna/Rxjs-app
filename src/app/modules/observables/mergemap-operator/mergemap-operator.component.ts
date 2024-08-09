import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-mergemap-operator',
  templateUrl: './mergemap-operator.component.html',
  styleUrls: ['./mergemap-operator.component.css']
})
export class MergemapOperatorComponent implements OnInit {
  constructor(private du:DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // ex - 01 (map)
    source.pipe(map(ele => this.getData(ele))
    ).subscribe(res => res.subscribe(el => {
      this.du.print(el,'elContainer');
    })
    )

    // ex - 02 (map)+(mergeAll)
    source.pipe(map(ele => this.getData(ele)),mergeAll()
  ).subscribe(res => {
    this.du.print(res,'elContainer1')
  });

  // ex - 03 (mergeMap)
    source.pipe(mergeMap(ele => this.getData(ele))
  ).subscribe(res => {
    this.du.print(res,'elContainer2')
  });
  }
  getData(data) {
    return of(data + ' Video Uploaded');
  }
}
