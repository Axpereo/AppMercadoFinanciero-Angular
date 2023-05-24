import { Component } from '@angular/core';

@Component({
  selector: 'app-utm',
  templateUrl: './utm.component.html',
  styleUrls: ['./utm.component.css']
})
export class UtmComponent{

  date = new Date();
  currentYear = this.date.getFullYear();

  moneda       : string = 'utm';
  coinType     : string = 'UTMs';
  code         : string = '$';
  botonGrafico : string = 'Gráfico Anual';
  nombreMoneda : string = 'UTM'

  constructor (){}

}
