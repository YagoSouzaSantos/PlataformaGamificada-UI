import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NivelListaComponent } from './components/nivel-lista/nivel-lista.component';
import { NovoNivelComponent } from './components/novo-nivel/novo-nivel.component';

import { NivelComponent } from './nivel.component';

const routes: Routes = [
  {
    path: '', component: NivelComponent,
    children: [{ path: 'lista', component: NivelListaComponent }, { path: 'novo', component: NovoNivelComponent }]
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NivelRoutingModule { }
