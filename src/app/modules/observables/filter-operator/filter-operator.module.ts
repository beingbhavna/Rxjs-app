import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterOperatorRoutingModule } from './filter-operator-routing.module';
import { FilterOperatorComponent } from './filter-operator.component';


@NgModule({
  declarations: [
    FilterOperatorComponent
  ],
  imports: [
    CommonModule,
    FilterOperatorRoutingModule
  ]
})
export class FilterOperatorModule { }
