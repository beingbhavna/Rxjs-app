import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetryOperatorRoutingModule } from './retry-operator-routing.module';
import { RetryOperatorComponent } from './retry-operator.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [
        RetryOperatorComponent
    ], imports: [CommonModule,
        RetryOperatorRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class RetryOperatorModule { }
