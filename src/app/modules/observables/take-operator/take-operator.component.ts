import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.css']
})
export class TakeOperatorComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    let fruits = from(['Apple', 'Mango', 'Orange', 'Pineapple', 'Pomegranate', 'Papaya', 'Banana', 'Garpes', 'Guavava', 'Palm']);
    // Ex - 01
    fruits.pipe(take(5)).subscribe(res => {
      this.designUtility.print(res, 'elContainer1');
    });

    // Ex - 02
    fruits.pipe(takeLast(5)).subscribe(res => {
      this.designUtility.print(res, 'elContainer2');
    });

    //Ex - 03
    let time = interval(1000);
    let condition1 = timer(6000);
    let condition2 = fromEvent(document, 'click')
    time.pipe(map(res => 'Example ' + res), takeUntil(condition2)).subscribe(res => {
      this.designUtility.print(res, 'elContainer3');
      console.log(res)
    });
  }

}
