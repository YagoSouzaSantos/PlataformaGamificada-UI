import { MatButtonModule } from '@angular/material/button';
import { NivelService } from './services/nivel.service';
import { HttpClientModule } from '@angular/common/http';
import { TableMaterialModule } from './../../shared/app-material/table-material/table-material.module';
import { NivelListaComponent } from './components/nivel-lista/nivel-lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { NivelRoutingModule } from './nivel-routing.module';
import { NivelComponent } from './nivel.component';
import { NovoNivelComponent } from './components/novo-nivel/novo-nivel.component';



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
    MatGridListModule
  ],
  providers: [
    NivelService
  ]
})
export class NivelModule { }
