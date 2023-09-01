import { RankingModule } from './pages/ranking/ranking.module';
import { RankingComponent } from './pages/ranking/ranking.component';
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
import { AvatarSelectComponent } from './shared/components/avatar-select/avatar-select.component';
import { BossComponent } from './shared/components/boss/boss.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
   { path: 'login', component: LoginComponent },
  { path: 'componentex', component: ComponenteXGuard },
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent },
  { path: 'earth', component: EarthComponent },
  { path: 'activities/:phaseId', component: ActivitiesComponent },
  { path: 'mundosdeestudo',component: MundosDeEstudoComponent },
  { path: 'proof/:phaseId',component: ProofComponent },
  { path: 'avatarselect',component: AvatarSelectComponent },
  { path: 'boss/:planet',component: BossComponent },
  

  
  { path: 'nivel', loadChildren: () => import('./pages/nivel/nivel.module').then(m => m.NivelModule) },
  { path: 'material', loadChildren: () => import('./pages/material-auxiliar/material-auxiliar.module').then(m => m.MaterialAuxiliarModule) },
  { path: 'usuario', loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: 'avaliacao', loadChildren: () => import('./pages/avaliacao/avaliacao.module').then(m => m.AvaliacaoModule) },
  { path: 'ranking', loadChildren: () => import('./pages/ranking/ranking.module').then(m => m.RankingModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  providers: [ComponenteXGuard]
})
export class AppRoutingModule { }




