import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coins} from '../interfaces/valores';

@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit{

  private apiKey:     string = 'df0f0dfe9a1956d6883885e1986dad1bb236bf1b';
  private serviceUrl: string = 'https://api.cmfchile.cl/api-sbifv3/recursos_api';

  moneda:string='';
  coinType:string='';
  currentDate:string = '';
  
  ///////////////////////////////
  mesRecibido:string='';
  anioRecibido:string=''
  ///////////////////////////////

  constructor( private http: HttpClient ) {
    console.log('Data Service Onload')
   }

  ngOnInit(): void {}

  recibirDatos(monedaRecibida:string, coinTypeRecibido:string, anioRecibido:string){
    console.log(`Datos recibidos en el servicio: ${monedaRecibida} ${coinTypeRecibido}`)
    console.log('Fecha recibida en el servicio: ' + anioRecibido)
    this.moneda = monedaRecibida;
    this.coinType = coinTypeRecibido;
    this.currentDate = anioRecibido;
  }

  ///////////////////////////////
  recibirMes(mesRecibido:any){
    this.mesRecibido = mesRecibido;
  } 

  recibirAnio(anioRecibido:any){
    this.anioRecibido = anioRecibido;
  } 
  ///////////////////////////////

  getData():Observable<Coins[]>{
    const url = `${this.serviceUrl}/${this.moneda}/${this.currentDate}?apikey=${this.apiKey}&formato=json`
    return this.http.get<Coins[]>(url);
  }

}
