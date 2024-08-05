import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcatMergeOperatorRoutingModule } from './concat-merge-operator-routing.module';
import { ConcatMergeOperatorComponent } from './concat-merge-operator.component';


@NgModule({
  declarations: [
    ConcatMergeOperatorComponent
  ],
  imports: [
    CommonModule,
    ConcatMergeOperatorRoutingModule
  ]
})
export class ConcatMergeOperatorModule { }
