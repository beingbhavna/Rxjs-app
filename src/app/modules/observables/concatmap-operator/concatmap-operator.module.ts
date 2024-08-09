import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcatmapOperatorRoutingModule } from './concatmap-operator-routing.module';
import { ConcatmapOperatorComponent } from './concatmap-operator.component';


@NgModule({
  declarations: [
    ConcatmapOperatorComponent
  ],
  imports: [
    CommonModule,
    ConcatmapOperatorRoutingModule
  ]
})
export class ConcatmapOperatorModule { }
