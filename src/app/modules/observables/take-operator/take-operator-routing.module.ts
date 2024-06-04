import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakeOperatorComponent } from './take-operator.component';

const routes: Routes = [
  {
    path: '',
    component: TakeOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakeOperatorRoutingModule { }
