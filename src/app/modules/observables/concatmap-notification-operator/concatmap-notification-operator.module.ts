import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcatmapNotificationOperatorRoutingModule } from './concatmap-notification-operator-routing.module';
import { ConcatmapNotificationOperatorComponent } from './concatmap-notification-operator.component';


@NgModule({
  declarations: [
    ConcatmapNotificationOperatorComponent
  ],
  imports: [
    CommonModule,
    ConcatmapNotificationOperatorRoutingModule
  ]
})
export class ConcatmapNotificationOperatorModule { }
