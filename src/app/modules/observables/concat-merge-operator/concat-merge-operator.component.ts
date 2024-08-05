import { Component, OnInit } from '@angular/core';
import { concat, interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-concat-merge-operator',
  templateUrl: './concat-merge-operator.component.html',
  styleUrls: ['./concat-merge-operator.component.css']
})
export class ConcatMergeOperatorComponent implements OnInit {
  finalMerge: any;
  constructor(private du :DesignUtilityService) { }

  ngOnInit(): void {
    const techSource = interval(1000).pipe(map(el => "Tech Video #" + (el+1)), take(5));
    const comedySource = interval(3000).pipe(map(el => " Comedy Video #" + (el+1)), take(3));
    const newsSource = interval(5000).pipe(map(el => " News Video #" + (el+1)), take(4));
    const finalObs = concat(techSource, comedySource, newsSource);
    finalObs.subscribe(res => {      
      this.du.print(res,'elContainer1')
    });
    const finalMerge = merge(techSource, comedySource, newsSource);
    finalMerge.subscribe(res => {      
      this.du.print(res,'elContainer')
    });
  }

}
