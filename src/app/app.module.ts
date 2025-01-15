import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {Component} from '@angular/core';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideAnimationsAsync(),
  ],
    
  bootstrap: [AppComponent],
 
})
export class AppModule {}

