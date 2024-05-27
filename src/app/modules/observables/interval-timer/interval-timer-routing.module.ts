import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntervalTimerComponent } from './interval-timer.component';

const routes: Routes = [
  {
    path: '',
    component: IntervalTimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntervalTimerRoutingModule { }
