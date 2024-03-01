import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './page/principal/principal.component';
import { SecundarioComponent } from './page/secundario/secundario.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch:'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'secundario', component: SecundarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
