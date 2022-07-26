import { NivelService } from './services/nivel.service';
import { HttpClientModule } from '@angular/common/http';
import { TableMaterialModule } from './../../shared/app-material/table-material/table-material.module';
import { NivelListaComponent } from './components/nivel-lista/nivel-lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelRoutingModule } from './nivel-routing.module';
import { NivelComponent } from './nivel.component';


@NgModule({
  declarations: [
    NivelComponent,
    NivelListaComponent
  ],
  imports: [
    CommonModule,
    NivelRoutingModule,
    TableMaterialModule,
    HttpClientModule
  ],
  providers: [
    NivelService
  ]
})
export class NivelModule { }
