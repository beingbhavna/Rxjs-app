import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZipForkjoinOperatorRoutingModule } from './zip-forkjoin-operator-routing.module';
import { ZipForkjoinOperatorComponent } from './zip-forkjoin-operator.component';


@NgModule({
  declarations: [
    ZipForkjoinOperatorComponent
  ],
  imports: [
    CommonModule,
    ZipForkjoinOperatorRoutingModule
  ]
})
export class ZipForkjoinOperatorModule { }
