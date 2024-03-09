import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './page/principal/principal.component';
import { SecundarioComponent } from './page/secundario/secundario.component';
import { TerceroComponent } from './page/tercero/tercero.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch:'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'secundario', component: SecundarioComponent },
  { path: 'tercero', component: TerceroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
