import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterOperatorComponent } from './filter-operator.component';

const routes: Routes = [
  {
    path: '',
    component: FilterOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterOperatorRoutingModule { }
