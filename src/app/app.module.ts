import { HeaderComponent } from './includes/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PromiseComponent } from './promise/promise.component';
import { AsyncAwaitComponent } from './Async-Await/Async-Await.component';

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    PromiseComponent,
      AsyncAwaitComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
