import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.css']
})
export class TapOperatorComponent implements OnInit {

  unSubs1: Subscription;
  unSubs2: Subscription;
  textColor: string = '';
  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    let timer = interval(1500)
    // Ex - 01
    let fruits = ['Apple', 'Mango', 'Orange', 'Pineapple', 'Pomegranate', 'Papaya', 'Banana', 'Garpes', 'Guavava', 'Palm'];
    this.unSubs1 = timer.pipe(tap(res => {
      if (res == 10) {
        // this.textColor = fruits[res];
        this.unSubs1.unsubscribe();
      }
    })).subscribe(res => {
      console.log(fruits[res]);
      this.designUtility.print(fruits[res], 'elContainer1');
    });

    // Ex - 02
    let colors = ['White', 'Black', 'Orange', 'Green', 'Blue', 'Pink', 'Yellow', 'Sky Blue', 'Magenta', 'Purple'];
    this.unSubs2 = timer.pipe(tap(res => {
      this.textColor = colors[res];
      if (res >= 10) {
        this.unSubs2.unsubscribe();
      }
    }),
      // map(res => colors[res])
    )
      .subscribe(res => {
        console.log(colors[res]);
        this.designUtility.print(colors[res], 'elContainer2');
      });
  }

}
