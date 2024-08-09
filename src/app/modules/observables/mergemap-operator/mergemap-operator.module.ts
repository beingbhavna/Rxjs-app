import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MergemapOperatorRoutingModule } from './mergemap-operator-routing.module';
import { MergemapOperatorComponent } from './mergemap-operator.component';


@NgModule({
  declarations: [
    MergemapOperatorComponent
  ],
  imports: [
    CommonModule,
    MergemapOperatorRoutingModule
  ]
})
export class MergemapOperatorModule { }
