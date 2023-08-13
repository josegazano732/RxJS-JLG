import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Practica01Component } from './practica01/practica01.component';
import { FilterComponent } from './Filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    Practica01Component,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
