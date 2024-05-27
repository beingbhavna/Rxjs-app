import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntervalTimerRoutingModule } from './interval-timer-routing.module';
import { IntervalTimerComponent } from './interval-timer.component';


@NgModule({
  declarations: [
    IntervalTimerComponent
  ],
  imports: [
    CommonModule,
    IntervalTimerRoutingModule
  ]
})
export class IntervalTimerModule { }
