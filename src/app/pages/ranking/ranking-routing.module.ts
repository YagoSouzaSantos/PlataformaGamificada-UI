import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking.component';
import { RankingListaComponent } from './components/ranking-lista/ranking-lista.component';


const routes: Routes = [
  {
    path: '', component: RankingComponent,
    children: [{ path: 'lista', component: RankingListaComponent }]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingRoutingModule { }
