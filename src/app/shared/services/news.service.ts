import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey    : string = '&apiKey=4fc602c1e1ab48818c3f67b429980109'
  private urlNews   : string = 'https://newsapi.org/v2/everything?language=es&q='
  private seleccion : string = 'Actualidad'

  constructor( private http:HttpClient) { }

  busqueda(busqueda:string){
    this.seleccion = busqueda;
  }

  getData():Observable<News[]>{
    return this.http.get<News[]>(`${this.urlNews}${this.seleccion}${this.apiKey}`);
  }

}
