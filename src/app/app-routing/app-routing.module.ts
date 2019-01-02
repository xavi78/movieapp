import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilmsListComponent} from '../films-list/films-list.component';
import { FilmsDetailComponent} from '../films-detail/films-detail.component';
import { SeriesComponent } from '../series/series/series.component';
import { NotFoundComponent} from '../not-found/not-found.component';
const routes:Routes =[
  {
    path: 'films',
    component: FilmsListComponent
  },{
    path: 'films/:id',
    component: FilmsDetailComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path:'404',
    component:NotFoundComponent
  },
  {
    path:'**',
    redirectTo: '/404'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
