import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchmapOperatorRoutingModule } from './switchmap-operator-routing.module';
import { SwitchmapOperatorComponent } from './switchmap-operator.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SwitchmapOperatorComponent
  ],
  imports: [
    CommonModule,
    SwitchmapOperatorRoutingModule,
    FormsModule
  ]
})
export class SwitchmapOperatorModule { }
