
import { UsuarioComponent } from './usuario.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListaUsuarioComponent } from './components/lista-usuario/lista-usuario.component';
import { NovoUsuarioComponent } from './components/novo-usuario/novo-usuario.component';




const routes: Routes = [
  {
    path: '', component: UsuarioComponent,
    children: [{ path: 'lista', component: ListaUsuarioComponent }, { path: 'novo', component: NovoUsuarioComponent }]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

