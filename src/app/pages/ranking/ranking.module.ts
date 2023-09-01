import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { HomeModule } from '../../core/components/home/home.module';

import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TableMaterialModule } from '../../shared/app-material/table-material/table-material.module';
import { HeaderModule } from '../../shared/components/header/header.module';
import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './ranking.component';
import { RankingListaComponent } from './components/ranking-lista/ranking-lista.component';
import {MatListModule} from '@angular/material/list';
import { DateBRPipe } from 'src/app/shared/pipe/dateBR.pipe';

@NgModule({
  declarations: [
    RankingComponent,
    RankingListaComponent,
    DateBRPipe
   ],
  imports: [
    CommonModule,
    RankingRoutingModule,
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
    HomeModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule,
    NgxChartsModule,
    MatListModule
  ],
  providers: [
  ]
})
export class RankingModule { }
