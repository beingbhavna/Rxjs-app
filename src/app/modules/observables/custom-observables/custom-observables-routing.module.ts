import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObservablesComponent } from './custom-observables.component';

const routes: Routes = [
  {
    path: '',
    component: CustomObservablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomObservablesRoutingModule { }
