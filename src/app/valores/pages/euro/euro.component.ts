import { Component } from '@angular/core';


@Component({
  selector: 'app-euro',
  templateUrl: './euro.component.html',
  styleUrls: ['./euro.component.css']
})
export class EuroComponent{
  //Enviando parametros al child component <component-table>

  date        = new Date();
  currentYear = `${this.date.getFullYear()}/${this.date.getMonth()+1}`

  moneda       : string = 'euro';
  coinType     : string = 'Euros';
  code         : string = 'EU';
  botonGrafico : string = 'Gráfico Mensual';
  nombreMoneda : string = 'Euro';

  constructor (){}


}


