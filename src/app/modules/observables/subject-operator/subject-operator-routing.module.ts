import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectOperatorComponent } from './subject-operator.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectOperatorRoutingModule { }
