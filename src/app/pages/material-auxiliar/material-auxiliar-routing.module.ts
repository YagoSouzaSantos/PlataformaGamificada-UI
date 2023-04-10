import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMaterialComponent } from './add-material/add-material.component';
import { ListaMaterialAuxiliarComponent } from './lista-material-auxiliar/lista-material-auxiliar.component';
import { MaterialAuxiliarComponent } from './material-auxiliar.component';

const routes: Routes = [
  {
    path: '', component: MaterialAuxiliarComponent,
    children: [{ path: 'lista', component: ListaMaterialAuxiliarComponent },{ path: 'adicionarmaterial', component: AddMaterialComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialAuxiliarRoutingModule { }
