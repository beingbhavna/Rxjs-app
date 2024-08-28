import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZipForkjoinOperatorComponent } from './zip-forkjoin-operator.component';

const routes: Routes = [
  {
    path: '',
    component: ZipForkjoinOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZipForkjoinOperatorRoutingModule { }
