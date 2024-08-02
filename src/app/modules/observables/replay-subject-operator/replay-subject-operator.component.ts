import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject-operator',
  templateUrl: './replay-subject-operator.component.html',
  styleUrls: ['./replay-subject-operator.component.css']
})
export class ReplaySubjectOperatorComponent implements OnInit {
  user1 = [
    "Angular 1",
    "Angular 2"
  ];
  user2 = [
  ];
  user3 = [
  ]
  user2SubscribeMode: boolean = false;
  user3SubscribeMode: boolean = false;
  subscription2: Subscription;
  subscription3: Subscription;
  toggleInterval: boolean = false;
  intSubscribe: Subscription;
  constructor(private designUtilityService: DesignUtilityService) { }
  ngOnInit(): void {
    this.designUtilityService.emitVideo.subscribe(res => {
      this.user1.push(res);
      console.log(res);
    });
  }

  addVideo(video) {
    this.designUtilityService.emitVideo.next(video.value);
  }

  user2Subscribe() {
    if (this.user2SubscribeMode) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.designUtilityService.emitVideo.subscribe(res => {
        this.user2.push(res);
      });
    }
    this.user2SubscribeMode = !this.user2SubscribeMode;
  }

  user3Subscribe() {
    if (this.user3SubscribeMode) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.designUtilityService.emitVideo.subscribe(res => {
        this.user3.push(res);
      });
    }
    this.user3SubscribeMode = !this.user3SubscribeMode;
  }

  toggleMethod() {
    this.toggleInterval = !this.toggleInterval;
    if (this.toggleInterval) {
      const intTimer = interval(2000);
      this.intSubscribe = intTimer.subscribe(res => {
        this.designUtilityService.emitVideo.next(res)
      });
    } else {
      this.intSubscribe.unsubscribe();
    }
  }
}
