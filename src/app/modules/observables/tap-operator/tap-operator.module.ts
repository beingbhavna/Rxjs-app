import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TapOperatorRoutingModule } from './tap-operator-routing.module';
import { TapOperatorComponent } from './tap-operator.component';


@NgModule({
  declarations: [
    TapOperatorComponent
  ],
  imports: [
    CommonModule,
    TapOperatorRoutingModule
  ]
})
export class TapOperatorModule { }
