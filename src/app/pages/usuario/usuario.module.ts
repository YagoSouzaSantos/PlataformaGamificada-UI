
import { RouterModule } from '@angular/router';
import { TableMaterialModule } from './../../shared/app-material/table-material/table-material.module';
import { UsuarioRoutingModule } from './usuario.routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { HomeModule } from 'src/app/core/components/home/home.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { ListaUsuarioComponent } from './components/lista-usuario/lista-usuario.component';
import { NovoUsuarioComponent } from './components/novo-usuario/novo-usuario.component';
import { UsuarioComponent } from './usuario.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


import { HttpClientModule } from '@angular/common/http';
import { CardPontuacaoComponent } from './components/card-pontuacao/card-pontuacao.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UsuarioRoutingModule,
    HeaderModule,
    HomeModule,

    HttpClientModule,

    MatTableModule,
    TableMaterialModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressBarModule

  ],
  declarations: [
    UsuarioComponent,
    ListaUsuarioComponent,
    NovoUsuarioComponent,
    CardPontuacaoComponent
  ],
  exports: [
    CardPontuacaoComponent
  ]
})
export class UsuarioModule { }
