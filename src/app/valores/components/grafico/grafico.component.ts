import { Component, Input, OnInit } from '@angular/core';
import { Chart } from "chart.js/auto";
import { DataService } from '../../services/data.service';
import { Coins } from '../../interfaces/valores';

@Component({
  selector: 'component-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit{

  coins:Coins[]=[];
  
  public chart: any;

  @Input() public moneda:any;
  @Input() public coinType:any;
  @Input() public currentYear:any;
  
  @Input() public botonGrafico:any;
  @Input() public nombreMoneda:any;

  date = new Date()
  labelFecha:any[]=[];
  labelValor:any[]=[];

  constructor (private dataService:DataService){}

  ngOnInit(): void {
    console.log('Valor recibido desde el Padre: ' + this.coinType)
    console.log('Valor recibido desde el Padre: ' + this.moneda)
    this.dataService.recibirDatos(this.moneda, this.coinType, this.currentYear)
    this.dataService.getData()
    .subscribe((response:any) => {
      this.coins = response[this.coinType];
      if(this.coins != null){
        for(let i=0; i<this.coins.length; i++){
          this.labelFecha.push(this.coins[i].Fecha)
          this.labelValor.push(parseFloat(this.coins[i].Valor))
        }
      }})
  }

  //propiedad para la directiva personalizada
  recarga = true;

  //  funcion click boton ocultar grafico; La directiva appRecarga con un ngOnChanges detecta si han habido cambios en la propiedad
  //  recarga, si es asi accede al ViewContainerRef y aplica los metodos .clear() y .createEmbbedView()
  recargar(){
    this.recarga = !this.recarga;
    this.chart = null;
  }

  // Se crea el grafico
  createChart(){
    this.chart = new Chart("Chart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
         labels: this.labelFecha,
	       datasets: [
          {
            label: `Valor ${this.moneda} por mes`,
            data: this.labelValor,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          }
        ]
      },
      options: {
      }
    });
  }


} 
