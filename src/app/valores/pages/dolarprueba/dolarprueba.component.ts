import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dolarprueba',
  templateUrl: './dolarprueba.component.html',
  styleUrls: ['./dolarprueba.component.css']
})
export class DolarpruebaComponent implements OnInit {

  moneda = 'dolar';
  coinType = 'Dolares';
  code = 'US';

  private apiKey:     string = 'bf6b491ec46caf655a1204c927f559580679f4c4';
  private serviceUrl: string = 'https://api.cmfchile.cl/api-sbifv3/recursos_api';

  //Array con los años y meses
  yearList = ['2023','2022','2021','2020'];
  monthList = ['01','02','03','04','05','06','07','08','09','10','11','12'];

  // Valores capturados desde el DOM <select> [(ngModel)]
  monthSelect: string = '0';
  yearSelect : string = '0';

  //Variable que aloja los datos desde la API
  listaDolar:any=[];

  constructor(private http:HttpClient){ }

  mostrarSpinner = false;
  spinner(){
    this.mostrarSpinner = !this.mostrarSpinner
  }

  getDolares():any{
    this.spinner()
    this.http.get(`${this.serviceUrl}/dolar/${this.yearSelect}/${this.monthSelect}?apikey=${this.apiKey}&formato=json`)
    .subscribe((response:any) => this.listaDolar = response.Dolares);
  }

  ngOnInit(): void {}
  

}


