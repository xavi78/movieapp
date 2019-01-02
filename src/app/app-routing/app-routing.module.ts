import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilmsListComponent} from '../films-list/films-list.component';
import { FilmsDetailComponent} from '../films-detail/films-detail.component';
const routes:Routes =[
  {
    path: 'films',
    component: FilmsListComponent
  },{
    path: 'films/:id',
    component: FilmsDetailComponent
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
