import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './Async-Await/Async-Await.component';
import { IntervalComponent } from './interval/interval.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: 'asyncAwait', component: AsyncAwaitComponent },
  {
    path: 'observable', component: ObservableComponent, children: [
      { path: '', component: ListComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'switchMap', component: SwitchmapComponent }
    ]
  },
  { path: '**', redirectTo: 'promise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
