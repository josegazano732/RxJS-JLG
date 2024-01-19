import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Practica01Component } from './practica01/practica01.component';

import { ViewmodeloComponent } from './componente/viewmodelo/viewmodelo.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FilterComponent } from './componente/Filter/filter.component';



@NgModule({
  declarations: [
    AppComponent,
    Practica01Component,
    FilterComponent,
    ViewmodeloComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
