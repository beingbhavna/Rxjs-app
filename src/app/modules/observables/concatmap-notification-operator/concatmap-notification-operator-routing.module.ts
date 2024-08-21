import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatmapNotificationOperatorComponent } from './concatmap-notification-operator.component';

const routes: Routes = [
  {
    path: '',
    component: ConcatmapNotificationOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcatmapNotificationOperatorRoutingModule { }
