import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebouncetimeOperatorRoutingModule } from './debouncetime-operator-routing.module';
import { DebouncetimeOperatorComponent } from './debouncetime-operator.component';


@NgModule({
  declarations: [
    DebouncetimeOperatorComponent
  ],
  imports: [
    CommonModule,
    DebouncetimeOperatorRoutingModule
  ]
})
export class DebouncetimeOperatorModule { }
