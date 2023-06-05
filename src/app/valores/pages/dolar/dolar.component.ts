import { Component} from '@angular/core';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent{
  //Enviando parametros al child component <component-table>
  
  date        = new Date();
  currentYear = `${this.date.getFullYear()}/${this.date.getMonth()+1}`;

  moneda       : string = 'dolar';
  coinType     : string = 'Dolares';
  code         : string = 'USD';
  botonGrafico : string = 'Gráfico Mensual';
  nombreMoneda : string = 'Dolar';

  constructor (){}



}
