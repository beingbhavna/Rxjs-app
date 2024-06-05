import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebouncetimeOperatorComponent } from './debouncetime-operator.component';

const routes: Routes = [
  {
    path: '',
    component: DebouncetimeOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebouncetimeOperatorRoutingModule { }
