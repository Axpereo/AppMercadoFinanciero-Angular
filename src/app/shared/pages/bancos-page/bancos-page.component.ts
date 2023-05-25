import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Instituciones } from '../../interfaces/bancos';

@Component({
  selector: 'app-bancos-page',
  templateUrl: './bancos-page.component.html',
  styleUrls: ['./bancos-page.component.css']
})
export class BancosPageComponent implements OnInit{

  private apiKey:string = 'df0f0dfe9a1956d6883885e1986dad1bb236bf1b';
  private bancosUrl:string = 'https://api.cmfchile.cl/api-sbifv3/recursos_api/balances/2023/01/instituciones?formato=json&apikey='

  instituciones:Instituciones []=[];

  descripciones = 'DescripcionesCodigosDeInstituciones'
  codigo:any[]=[];
  nombres:any[]=[];
  
  constructor(private http:HttpClient){}

  getData():Observable<Instituciones>{
    return this.http.get<Instituciones>(`${this.bancosUrl}${this.apiKey}`)
  }

  ngOnInit(): void {
    this.getData()
    .subscribe((response:any) => {
      this.instituciones = response[this.descripciones];
      if(this.instituciones != null){
        for(let i=0; i<this.instituciones.length; i++){
          this.codigo.push(this.instituciones[i].CodigoInstitucion)
          this.nombres.push(this.instituciones[i].NombreInstitucion)
        }
      }})
  }



}



