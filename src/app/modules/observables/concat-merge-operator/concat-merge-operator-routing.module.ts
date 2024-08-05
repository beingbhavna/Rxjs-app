import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatMergeOperatorComponent } from './concat-merge-operator.component';

const routes: Routes = [
  {
    path:'',
    component:ConcatMergeOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcatMergeOperatorRoutingModule { }
