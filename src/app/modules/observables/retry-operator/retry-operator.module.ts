import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetryOperatorRoutingModule } from './retry-operator-routing.module';
import { RetryOperatorComponent } from './retry-operator.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RetryOperatorComponent
  ],
  imports: [
    CommonModule,
    RetryOperatorRoutingModule,
    HttpClientModule
  ]
})
export class RetryOperatorModule { }
