import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TapOperatorComponent } from './tap-operator.component';

const routes: Routes = [
  {
    path: '',
    component: TapOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TapOperatorRoutingModule { }
