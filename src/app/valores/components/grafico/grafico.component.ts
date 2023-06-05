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

  @Input() public moneda:string = '';
  @Input() public coinType:string = '';
  @Input() public currentYear:any;
  
  @Input() public botonGrafico:string = '';
  @Input() public nombreMoneda:string = '';

  date = new Date()
  labelFecha:string[]=[];
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

          //  Formatear datos de valores para que se eliminen los puntos de un valor *1000 en el string y luego se reemplaze 
          //  la coma que posee el decimal por un punto
          let valorSinPuntos = this.coins[i].Valor.split('.').join('')
          
          let valorReemplazoComas = valorSinPuntos.split(',').join('.')

          this.labelValor.push(valorReemplazoComas)
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
