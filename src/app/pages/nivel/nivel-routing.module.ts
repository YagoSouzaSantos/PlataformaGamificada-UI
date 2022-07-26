import { NivelListaComponent } from './components/nivel-lista/nivel-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivelComponent } from './nivel.component';

const routes: Routes = [
  { path: '', component: NivelComponent,
    children: [{path: 'lista', component: NivelListaComponent}]
 }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NivelRoutingModule { }
