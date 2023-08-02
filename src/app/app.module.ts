import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialAuxiliarModule } from './pages/material-auxiliar/material-auxiliar.module';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MundosDeEstudoModule } from './pages/mundosDeEstudo/mundosDeEstudo.module';
import { WorldsWizardModule } from './shared/components/worlds-wizard/worlds-wizard.module';
import { LoginModule } from './core/login/login.module';
import {MatRadioModule} from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { AvaliacaoModule } from './pages/avaliacao/avaliacao.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    LoginModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialAuxiliarModule,
    RouterModule,
    MatDialogModule,
    FlexLayoutModule,
    MatRadioModule,
    MatInputModule,

    MundosDeEstudoModule,
    WorldsWizardModule,
    AvaliacaoModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
