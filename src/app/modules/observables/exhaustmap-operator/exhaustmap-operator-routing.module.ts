import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExhaustmapOperatorComponent } from './exhaustmap-operator.component';

const routes: Routes = [
  {
    path: '',
    component: ExhaustmapOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhaustmapOperatorRoutingModule { }
