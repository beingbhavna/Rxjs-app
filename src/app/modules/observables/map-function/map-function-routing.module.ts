import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapFunctionComponent } from './map-function.component';

const routes: Routes = [
  {
    path: '',
    component: MapFunctionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapFunctionRoutingModule { }
