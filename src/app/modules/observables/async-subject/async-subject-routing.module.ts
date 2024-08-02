import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './async-subject.component';

const routes: Routes = [
  {
    path:'',
    component:AsyncSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsyncSubjectRoutingModule { }
