import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { HomeModule } from 'src/app/core/components/home/home.module';
import { ListaMaterialAuxiliarComponent } from './lista-material-auxiliar/lista-material-auxiliar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AddMaterialComponent } from './add-material/add-material.component';
import { MaterialAuxiliarComponent } from './material-auxiliar.component';
import { MaterialAuxiliarRoutingModule } from './material-auxiliar-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    MaterialAuxiliarRoutingModule,
    HomeModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule
  ],
  declarations: [MaterialAuxiliarComponent, AddMaterialComponent, ListaMaterialAuxiliarComponent]
})
export class MaterialAuxiliarModule { }
