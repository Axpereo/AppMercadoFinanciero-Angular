import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instituciones } from '../interfaces/bancos';
import { Observable } from 'rxjs';
import { environmentsBancos } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class BancosService {

    private apiKey:string = environmentsBancos.apiKey;
    private bancosUrl:string = environmentsBancos.bancosUrl;
    
    constructor(private http:HttpClient){}
  
    getData():Observable<Instituciones>{
      return this.http.get<Instituciones>(`${this.bancosUrl}${this.apiKey}`)
    }

}
