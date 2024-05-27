import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToArrayRoutingModule } from './to-array-routing.module';
import { ToArrayComponent } from './to-array.component';


@NgModule({
  declarations: [
    ToArrayComponent
  ],
  imports: [
    CommonModule,
    ToArrayRoutingModule
  ]
})
export class ToArrayModule { }
