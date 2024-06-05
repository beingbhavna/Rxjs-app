import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetryOperatorComponent } from './retry-operator.component';

const routes: Routes = [
  {
    path: '',
    component: RetryOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetryOperatorRoutingModule { }
