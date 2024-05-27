import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfFromRoutingModule } from './of-from-routing.module';
import { OfFromComponent } from './of-from.component';


@NgModule({
  declarations: [
    OfFromComponent
  ],
  imports: [
    CommonModule,
    OfFromRoutingModule
  ]
})
export class OfFromModule { }
