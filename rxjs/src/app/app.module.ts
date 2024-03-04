import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ViewmodeloComponent } from './componente/viewmodelo/viewmodelo.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FilterComponent } from './componente/Filter/filter.component';
import { PrincipalComponent } from './page/principal/principal.component';
import { SecundarioComponent } from './page/secundario/secundario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ViewmodeloComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    SecundarioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
