import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatmapOperatorComponent } from './concatmap-operator.component';

const routes: Routes = [
  {
    path: '',
    component: ConcatmapOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcatmapOperatorRoutingModule { }
