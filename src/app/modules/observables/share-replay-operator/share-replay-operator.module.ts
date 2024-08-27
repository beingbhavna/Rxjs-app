import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareReplayOperatorRoutingModule } from './share-replay-operator-routing.module';
import { ShareReplayOperatorComponent } from './share-replay-operator.component';


@NgModule({
  declarations: [
    ShareReplayOperatorComponent
  ],
  imports: [
    CommonModule,
    ShareReplayOperatorRoutingModule
  ]
})
export class ShareReplayOperatorModule { }
