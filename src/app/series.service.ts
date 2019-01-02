import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http:HttpClient) { }
  public getSeries():Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/tv/popular?api_key=81aca90227197885e3861bf1d2e1acd1&language=es-ES');
  }
}
