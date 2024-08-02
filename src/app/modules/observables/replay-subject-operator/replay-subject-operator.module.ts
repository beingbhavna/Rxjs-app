import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReplaySubjectOperatorRoutingModule } from './replay-subject-operator-routing.module';
import { ReplaySubjectOperatorComponent } from './replay-subject-operator.component';


@NgModule({
  declarations: [
    ReplaySubjectOperatorComponent
  ],
  imports: [
    CommonModule,
    ReplaySubjectOperatorRoutingModule
  ]
})
export class ReplaySubjectOperatorModule { }
