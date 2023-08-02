import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliacaoComponent } from './avaliacao.component';
import { AvaliacaoCadastroComponent } from './components/avaliacao-cadastro/avaliacao-cadastro.component';

const routes: Routes = [{
  path: '', component: AvaliacaoComponent,
  children: [{ path: 'cadastro', component: AvaliacaoCadastroComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliacaoRoutingModule { }
