import { HeaderComponent } from './includes/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PromiseComponent } from './promise/promise.component';
import { AsyncAwaitComponent } from './Async-Await/Async-Await.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntervalComponent } from './interval/interval.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
      AsyncAwaitComponent,
      ObservableComponent,
      ListComponent,
      FromEventComponent,
      IntervalComponent,
      SwitchmapComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
