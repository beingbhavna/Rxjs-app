import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfFromComponent } from './of-from.component';

const routes: Routes = [
  {
    path: '',
    component: OfFromComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfFromRoutingModule { }
