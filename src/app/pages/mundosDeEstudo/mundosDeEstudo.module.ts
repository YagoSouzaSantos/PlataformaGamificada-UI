
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MundosDeEstudoComponent } from './mundosDeEstudo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PhaseListComponent } from 'src/app/shared/components/phase-list/phase-list.component';
import { PhaseService } from 'src/app/shared/components/phase-list/services/phase.service';
import { EarthComponent } from './planets/earth/earth.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ActivitiesComponent } from 'src/app/shared/components/acivities/activities.component';
import { ComponenteXGuard } from 'src/app/shared/components/componente-x-guard/componente-x-guard.component';
import {MatRadioModule} from '@angular/material/radio';
import { ProofComponent } from 'src/app/shared/components/proof/proof.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { WorldsWizardComponent } from 'src/app/shared/components/worlds-wizard/worlds-wizard.component';
import { WorldsWizardModule } from 'src/app/shared/components/worlds-wizard/worlds-wizard.module';
import { BossComponent } from 'src/app/shared/components/boss/boss.component';



@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    UsuarioModule,
    WorldsWizardModule
  ],
  declarations: [MundosDeEstudoComponent, PhaseListComponent, EarthComponent, ActivitiesComponent, ComponenteXGuard, ProofComponent, BossComponent],
  exports: [MundosDeEstudoComponent, PhaseListComponent, EarthComponent,  ActivitiesComponent, BossComponent],
  providers: [PhaseService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MundosDeEstudoModule { }
