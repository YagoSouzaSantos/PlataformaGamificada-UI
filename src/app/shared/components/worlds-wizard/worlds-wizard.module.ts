import { NgModule } from '@angular/core';
import { WorldsWizardComponent } from './worlds-wizard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { AvatarSelectComponent } from '../avatar-select/avatar-select.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ShopComponent } from '../shop/shop.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
    declarations: [WorldsWizardComponent, AvatarSelectComponent,ShopComponent],
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
        MatIconModule
      ],
    exports: [WorldsWizardComponent, AvatarSelectComponent, ShopComponent]
})
export class WorldsWizardModule {}