import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css']
})
export class IntervalTimerComponent implements OnInit {
  videoSubscribe: Subscription;
  obsMsg: any;
  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    let obsInterval = interval(1000);
    this.videoSubscribe = obsInterval.subscribe(res => {
      this.obsMsg = 'video' + res;
      let elValue = 'video ' + res;
      console.log('video ' + res);

      this.designUtility.print(elValue, 'elContainer')
      this.designUtility.print(elValue, 'elContainer2')
      this.designUtility.print(elValue, 'elContainer3')
      if (res >= 5) {
        this.videoSubscribe.unsubscribe();
      }
    })
  }

}
