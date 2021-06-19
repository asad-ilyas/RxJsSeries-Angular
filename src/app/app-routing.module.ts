import { PromiseComponent } from './promise/promise.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './Async-Await/Async-Await.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: 'asyncAwait', component: AsyncAwaitComponent },
  { path: '**', redirectTo: 'promise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
