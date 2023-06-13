import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { MundosDeEstudoComponent } from './pages/mundosDeEstudo/mundosDeEstudo.component';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './core/login/login.component';
import { MainComponent } from './core/template/main/main.component';
import { EarthComponent } from './pages/mundosDeEstudo/planets/earth/earth.component';
import { ActivitiesComponent } from './shared/components/acivities/activities.component';
import { ComponenteXGuard } from './shared/components/componente-x-guard/componente-x-guard.component';
import { ProofComponent } from './shared/components/proof/proof.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent,
    // canActivate: [AuthGuard]
  },
   { path: 'login', component: LoginComponent },
  { path: 'componentex', component: ComponenteXGuard },
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent },
  { path: 'earth', component: EarthComponent },
  { path: 'activities/:phaseId', component: ActivitiesComponent },
  { path: 'mundosdeestudo',component: MundosDeEstudoComponent },
  { path: 'proof/:phaseId',component: ProofComponent },
  
  { path: 'nivel', loadChildren: () => import('./pages/nivel/nivel.module').then(m => m.NivelModule) },
  { path: 'avaliacao', loadChildren: () => import('./pages/avaliacao/avaliacao.module').then(m => m.AvaliacaoModule) },
  { path: 'material', loadChildren: () => import('./pages/material-auxiliar/material-auxiliar.module').then(m => m.MaterialAuxiliarModule) },
  { path: 'usuario', loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  providers: [ComponenteXGuard]
})
export class AppRoutingModule { }




