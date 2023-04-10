import { HomeModule } from './../../core/components/home/home.module';
import { HomeComponent } from './../../core/components/home/home.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

import { TableMaterialModule } from './../../shared/app-material/table-material/table-material.module';
import { HeaderModule } from './../../shared/components/header/header.module';
import { NivelListaComponent } from './components/nivel-lista/nivel-lista.component';
import { NovoNivelComponent } from './components/novo-nivel/novo-nivel.component';
import { NivelRoutingModule } from './nivel-routing.module';
import { NivelComponent } from './nivel.component';
import { NivelService } from './services/nivel.service';



@NgModule({
  declarations: [
    NivelComponent,
    NivelListaComponent,
    NovoNivelComponent
  ],
  imports: [
    CommonModule,
    NivelRoutingModule,
    TableMaterialModule,
    MatButtonModule,
    HttpClientModule,
    MatDividerModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HeaderModule,
    HomeModule
  ],
  providers: [
    NivelService
  ]
})
export class NivelModule { }
