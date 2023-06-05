import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../interfaces/news';
import { environmentsNoticias } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey    : string = environmentsNoticias.apiKey;
  private urlNews   : string = environmentsNoticias.urlNews;
  private seleccion : string = environmentsNoticias.seleccion;

  constructor( private http:HttpClient) { }

  busqueda(busqueda:string){
    this.seleccion = busqueda;
  }

  getData():Observable<News[]>{
    return this.http.get<News[]>(`${this.urlNews}${this.seleccion}${this.apiKey}`);
  }

}
