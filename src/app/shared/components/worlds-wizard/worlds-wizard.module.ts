import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { AvatarSelectComponent } from '../avatar-select/avatar-select.component';
import { ShopComponent } from '../shop/shop.component';
import { ToHomeButtonComponent } from '../to-home-button/to-home-button.component';
import { WorldsWizardComponent } from './worlds-wizard.component';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
    declarations: [WorldsWizardComponent, AvatarSelectComponent,ShopComponent,ToHomeButtonComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        FlexLayoutModule,
        MatButtonModule,        
        MatCardModule,
        MatGridListModule,
        MatDialogModule,
        MatButtonModule,
        MatGridListModule,
        MatIconModule,
        MatTooltipModule
      ],
    exports: [WorldsWizardComponent, AvatarSelectComponent, ShopComponent, ToHomeButtonComponent]
})
export class WorldsWizardModule {}