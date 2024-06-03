import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluckOperatorRoutingModule } from './pluck-operator-routing.module';
import { PluckOperatorComponent } from './pluck-operator.component';


@NgModule({
  declarations: [
    PluckOperatorComponent
  ],
  imports: [
    CommonModule,
    PluckOperatorRoutingModule
  ]
})
export class PluckOperatorModule { }
