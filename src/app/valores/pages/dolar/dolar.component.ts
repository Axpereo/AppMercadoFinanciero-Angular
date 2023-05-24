import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit{
  date        = new Date();
  currentYear = `${this.date.getFullYear()}/${this.date.getMonth()+1}`;

  moneda       : string = 'dolar';
  coinType     : string = 'Dolares';
  code         : string = 'US';
  botonGrafico : string = 'Gráfico Mensual';
  nombreMoneda : string = 'Dolar';

  mesSeleccionado:any;
  anioSeleccionado:any;

  constructor (){}
  
  ngOnInit(): void {
  }

  cargarMes(monthSelect:any){
    this.mesSeleccionado = monthSelect;
    console.log(this.mesSeleccionado)
  }

  cargarAnio(yearSelect:any){
    this.anioSeleccionado = yearSelect;
    console.log(this.anioSeleccionado)
  }



}
