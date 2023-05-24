import { Component, Input, OnInit } from '@angular/core';
import { Coins } from '../../interfaces/valores';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'component-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  
  coins:Coins[]=[];
  loading = true;
  //Recibiendo los parametros desde el HTML
  @Input() public moneda:any;
  @Input() public coinType:any;
  @Input() public code:any;

  //Recibe los parametros de año y fecha para armar la URL de la API
  @Input() public currentYear:any;


  ///////////////////////////////
  @Input() miFuncionMes: Function = ()=>{};
  @Input() miFuncionAnio: Function = ()=>{};

  constructor (private dataService:DataService){}

  ejecutarFuncionMes(){
    if(this.miFuncionMes){
      this.miFuncionMes()
    }
  }

  ejecutarFuncionAnio(){
    if(this.miFuncionAnio){
      this.miFuncionAnio()
    }
  }

  enviarMesSeleccionado(){
    const mesRecibido = this.miFuncionMes();
    this.dataService.recibirMes(mesRecibido)
  }

  enviarAnioSeleccionado(){
    const anioRecibido = this.miFuncionAnio();
    this.dataService.recibirMes(anioRecibido)
  }
  ///////////////////////////////


  ngOnInit() {
    this.loading;
    console.log('Valor recibido desde el Padre: ' + this.coinType)
    console.log('Valor recibido desde el Padre: ' + this.moneda)
    //Enviando los parametros al servicio

    this.dataService.getData()
    .subscribe((response:any) => {

      this.loading = false
      this.coins = response[this.coinType]
    });
  }
}
