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
      },
      {
        path: 'pluck',
        loadChildren: () => import('./pluck-operator/pluck-operator.module').then(m => m.PluckOperatorModule),
      },
      {
        path: 'filter',
        loadChildren: () => import('./filter-operator/filter-operator.module').then(m => m.FilterOperatorModule),
      },
      {
        path: 'tap',
        loadChildren: () => import('./tap-operator/tap-operator.module').then(m => m.TapOperatorModule),
      },
      {
        path: 'take',
        loadChildren: () => import('./take-operator/take-operator.module').then(m => m.TakeOperatorModule),
      },
      {
        path: 'retry',
        loadChildren: () => import('./retry-operator/retry-operator.module').then(m => m.RetryOperatorModule),
      },
      {
        path: 'debouncetime',
        loadChildren: () => import('./debouncetime-operator/debouncetime-operator.module').then(m => m.DebouncetimeOperatorModule),
      },
      {
        path: 'subject',
        loadChildren: () => import('./subject-operator/subject-operator.module').then(m => m.SubjectOperatorModule),
      },
      {
        path: 'replaysubject',
        loadChildren: () => import('./replay-subject-operator/replay-subject-operator.module').then(m => m.ReplaySubjectOperatorModule),
      },
      {
        path: 'async-subject',
        loadChildren: () => import('./async-subject/async-subject.module').then(m => m.AsyncSubjectModule),
      },
      {
        path: 'concat-merge',
        loadChildren: () => import('./concat-merge-operator/concat-merge-operator.module').then(m => m.ConcatMergeOperatorModule),
      },
      {
        path: 'mergeMap',
        loadChildren: () => import('./mergemap-operator/mergemap-operator.module').then(m => m.MergemapOperatorModule),
      },
      {
        path: 'concatMap',
        loadChildren: () => import('./concatmap-operator/concatmap-operator.module').then(m => m.ConcatmapOperatorModule),
      },
      {
        path: 'concatMap-notification',
        loadChildren: () => import('./concatmap-notification-operator/concatmap-notification-operator.module').then(m => m.ConcatmapNotificationOperatorModule),
      },
      {
        path: 'switchMap',
        loadChildren: () => import('./switchmap-operator/switchmap-operator.module').then(m => m.SwitchmapOperatorModule),
      },
      {
        path: 'exhaustMap',
        loadChildren: () => import('./exhaustmap-operator/exhaustmap-operator.module').then(m => m.ExhaustmapOperatorModule),
      },
      {
        path: 'share-replay',
        loadChildren: () => import('./share-replay-operator/share-replay-operator.module').then(m => m.ShareReplayOperatorModule),
      },
      {
        path: 'zip-forkjoin',
        loadChildren: () => import('./zip-forkjoin-operator/zip-forkjoin-operator.module').then(m => m.ZipForkjoinOperatorModule),
      },
      {
        path: 'catcherror-throwerror',
        loadChildren: () => import('./catcherror-throwerror-operator/catcherror-throwerror-operator.module').then(m => m.CatcherrorThrowerrorOperatorModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
