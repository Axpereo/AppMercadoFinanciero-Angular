import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instituciones } from '../interfaces/bancos';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class BancosService {

    private apiKey:string = environment.apiKey;
    private bancosUrl:string = 'https://api.cmfchile.cl/api-sbifv3/recursos_api/balances/2023/01/instituciones?formato=json&apikey=';
    
    constructor(private http:HttpClient){}
  
    getData():Observable<Instituciones>{
      return this.http.get<Instituciones>(`${this.bancosUrl}${this.apiKey}`)
    }

}
