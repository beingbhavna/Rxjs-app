import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeOperatorRoutingModule } from './take-operator-routing.module';
import { TakeOperatorComponent } from './take-operator.component';


@NgModule({
  declarations: [
    TakeOperatorComponent
  ],
  imports: [
    CommonModule,
    TakeOperatorRoutingModule
  ]
})
export class TakeOperatorModule { }
