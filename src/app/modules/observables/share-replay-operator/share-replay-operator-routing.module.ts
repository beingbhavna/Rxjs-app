import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareReplayOperatorComponent } from './share-replay-operator.component';

const routes: Routes = [
  {
    path: '',
    component: ShareReplayOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareReplayOperatorRoutingModule { }
