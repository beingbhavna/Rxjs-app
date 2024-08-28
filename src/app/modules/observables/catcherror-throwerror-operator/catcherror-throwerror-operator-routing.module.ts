import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatcherrorThrowerrorOperatorComponent } from './catcherror-throwerror-operator.component';

const routes: Routes = [
  {
    path: '',
    component: CatcherrorThrowerrorOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatcherrorThrowerrorOperatorRoutingModule { }
