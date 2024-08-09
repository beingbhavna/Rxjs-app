import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MergemapOperatorComponent } from './mergemap-operator.component';

const routes: Routes = [
  {
    path: '',
    component: MergemapOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MergemapOperatorRoutingModule { }
