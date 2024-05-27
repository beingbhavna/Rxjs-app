import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomObservablesRoutingModule } from './custom-observables-routing.module';
import { CustomObservablesComponent } from './custom-observables.component';


@NgModule({
  declarations: [
    CustomObservablesComponent
  ],
  imports: [
    CommonModule,
    CustomObservablesRoutingModule
  ]
})
export class CustomObservablesModule { }
