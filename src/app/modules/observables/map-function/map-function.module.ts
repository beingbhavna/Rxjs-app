import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapFunctionRoutingModule } from './map-function-routing.module';
import { MapFunctionComponent } from './map-function.component';


@NgModule({
  declarations: [
    MapFunctionComponent
  ],
  imports: [
    CommonModule,
    MapFunctionRoutingModule
  ]
})
export class MapFunctionModule { }
