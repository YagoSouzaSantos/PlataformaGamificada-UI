import { NovoNivelComponent } from './pages/nivel/components/novo-nivel/novo-nivel.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './core/template/main/main.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'main', component: MainComponent},
  { path: 'avaliacao', loadChildren: () => import('./pages/avaliacao/avaliacao.module').then(m => m.AvaliacaoModule) },
  { path: 'nivel', loadChildren: () => import('./pages/nivel/nivel.module').then(m => m.NivelModule) },
 
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




