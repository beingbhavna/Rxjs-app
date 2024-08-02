import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplaySubjectOperatorComponent } from './replay-subject-operator.component';

const routes: Routes = [{
  path: '',
  component: ReplaySubjectOperatorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReplaySubjectOperatorRoutingModule { }
