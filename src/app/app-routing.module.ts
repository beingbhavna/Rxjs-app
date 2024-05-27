import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path:'**',
  //   redirectTo:'promise'
  // },
  {
    path: 'promise',
    loadChildren: () => import("./modules/promise/promise.module").then(m => m.PromiseModule),
  },
  {
    path: 'async-await',
    loadChildren: () => import("./modules/async-await/async-await.module").then(m => m.AsyncAwaitModule),
  },
  {
    path: 'observables',
    loadChildren: () => import("./modules/observables/observables.module").then(m => m.ObservablesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
