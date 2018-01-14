import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routing';

import { HomeComponent } from './home/home.component';


//configs
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    SocketIoModule.forRoot(config) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
