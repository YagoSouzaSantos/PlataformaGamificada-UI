import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableMaterialModule } from 'src/app/shared/app-material/table-material/table-material.module';

import { AvaliacaoRoutingModule } from './avaliacao-routing.module';
import { AvaliacaoComponent } from './avaliacao.component';
import { AvaliacaoCadastroComponent } from './components/avaliacao-cadastro/avaliacao-cadastro.component';
import { AvaliacaoListaComponent } from './components/avaliacao-lista/avaliacao-lista.component';


@NgModule({
  declarations: [
    AvaliacaoComponent,   
    AvaliacaoCadastroComponent,
    AvaliacaoListaComponent
  ],
  imports: [
    CommonModule,
    AvaliacaoRoutingModule,
    TableMaterialModule
  ]
})
export class AvaliacaoModule { }
