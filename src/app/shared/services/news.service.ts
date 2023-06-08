import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../interfaces/news';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey    : string = environment.apiKeyNoticias;
  private urlNews   : string = 'https://newsapi.org/v2/everything?language=es&q=';
  private seleccion : string = 'Actualidad';

  constructor( private http:HttpClient) { }

  busqueda(busqueda:string){
    this.seleccion = busqueda;
  }

  getData():Observable<News[]>{
    return this.http.get<News[]>(`${this.urlNews}${this.seleccion}&apiKey=${this.apiKey}`);
  }

}
