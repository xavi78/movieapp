import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../peliculas.service';
@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  titulo:string;
  
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.titulo="Listado de Peliculas";
    console.log("Componente listado de peliculas cargado");
  }
  getPeliculas(){
    this.peliculasService.getPeliculas().subscribe(

    )
  }
}
