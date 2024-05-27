import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: '',
    data: {
      title: 'fromEvent'
    },
    children: [
      {
        path: 'fromEvent',
        loadChildren: () => import('./from-event/from-event.module').then(m => m.FromEventModule),
      },
      {
        path: 'interval-timer',
        loadChildren: () => import('./interval-timer/interval-timer.module').then(m => m.IntervalTimerModule),
      },
      {
        path: 'of-from',
        loadChildren: () => import('./of-from/of-from.module').then(m => m.OfFromModule),
      },
      {
        path: 'to-array',
        loadChildren: () => import('./to-array/to-array.module').then(m => m.ToArrayModule),
      },
      {
        path: 'custom-observables',
        loadChildren: () => import('./custom-observables/custom-observables.module').then(m => m.CustomObservablesModule),
      },
      {
        path: 'map-function',
        loadChildren: () => import('./map-function/map-function.module').then(m => m.MapFunctionModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
