import { FormsMaterialModule } from './../../shared/app-material/forms-material/forms-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableMaterialModule } from 'src/app/shared/app-material/table-material/table-material.module';

import { AvaliacaoRoutingModule } from './avaliacao-routing.module';
import { AvaliacaoComponent } from './avaliacao.component';
import { AvaliacaoCadastroComponent } from './components/avaliacao-cadastro/avaliacao-cadastro.component';
import { AvaliacaoListaComponent } from './components/avaliacao-lista/avaliacao-lista.component';
import { HomeModule } from 'src/app/core/components/home/home.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AvaliacaoComponent,
    AvaliacaoCadastroComponent
  ],
  imports: [
    CommonModule,
    AvaliacaoRoutingModule,
    TableMaterialModule,
    HomeModule,
    FormsMaterialModule,
    HeaderModule,
    MatRadioModule
  ],
  exports: [
    AvaliacaoComponent,
    AvaliacaoCadastroComponent
  ]
})
export class AvaliacaoModule { }
