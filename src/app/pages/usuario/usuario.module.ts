
import { TableMaterialModule } from './../../shared/app-material/table-material/table-material.module';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { ListaUsuarioComponent } from './components/lista-usuario/lista-usuario.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { HomeModule } from 'src/app/core/components/home/home.module';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NovoUsuarioComponent } from './components/novo-usuario/novo-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UsuarioRoutingModule,
    HeaderModule,
    HomeModule,
    
    MatTableModule,
    TableMaterialModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,


  ],
  declarations: [
    UsuarioComponent,
    ListaUsuarioComponent,
    NovoUsuarioComponent
  ]
})
export class UsuarioModule { }
