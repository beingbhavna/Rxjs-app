import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PluckOperatorComponent } from './pluck-operator.component';

const routes: Routes = [
  {
    path:'',
    component:PluckOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluckOperatorRoutingModule { }
