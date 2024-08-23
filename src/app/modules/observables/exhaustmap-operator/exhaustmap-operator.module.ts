import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhaustmapOperatorRoutingModule } from './exhaustmap-operator-routing.module';
import { ExhaustmapOperatorComponent } from './exhaustmap-operator.component';


@NgModule({
  declarations: [
    ExhaustmapOperatorComponent
  ],
  imports: [
    CommonModule,
    ExhaustmapOperatorRoutingModule
  ]
})
export class ExhaustmapOperatorModule { }
