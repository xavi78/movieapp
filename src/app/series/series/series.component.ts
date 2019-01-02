import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../../series.service';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  private series: Array<any>;
  titulo:string="Listado de Series";
  

  constructor(private seriesService: SeriesService) { }
   
  ngOnInit() {
    this.getSeries();
  }
  getSeries(){
    this.seriesService.getSeries().subscribe(
      result=>{
        this.series = result.results;
        console.log(this.series);
      },
      error=>{
        console.error(error);
      }
    )
  }

}
