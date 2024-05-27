import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncAwaitRoutingModule } from './async-await-routing.module';
import { AsyncAwaitComponent } from './async-await.component';


@NgModule({
  declarations: [
    AsyncAwaitComponent
  ],
  imports: [
    CommonModule,
    AsyncAwaitRoutingModule
  ]
})
export class AsyncAwaitModule { }
