import { NgModule } from '@angular/core';
import { WorldsWizardComponent } from './worlds-wizard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
    declarations: [WorldsWizardComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        FlexLayoutModule,
        MatButtonModule,        
      ],
    exports: [WorldsWizardComponent]
})
export class WorldsWizardModule {}