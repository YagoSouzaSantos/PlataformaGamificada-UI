import { MundosDeEstudoComponent } from './pages/mundosDeEstudo/mundosDeEstudo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

import { LoginComponent } from './core/login/login.component';
import { MainComponent } from './core/template/main/main.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    // canActivate: [AuthGuard]
  },
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent },
  { path: 'mundosdeestudo', component: MundosDeEstudoComponent },
  { path: 'nivel', loadChildren: () => import('./pages/nivel/nivel.module').then(m => m.NivelModule) },
  { path: 'avaliacao', loadChildren: () => import('./pages/avaliacao/avaliacao.module').then(m => m.AvaliacaoModule) },
  { path: 'material', loadChildren: () => import('./pages/material-auxiliar/material-auxiliar.module').then(m => m.MaterialAuxiliarModule) },
  { path: 'usuario', loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




