import { Component} from '@angular/core';


@Component({
  selector: 'app-uf',
  templateUrl: './uf.component.html',
  styleUrls: ['./uf.component.css']
})
export class UfComponent{
  //Enviando parametros al child component <component-table>

  date        = new Date();
  currentYear = `${this.date.getFullYear()}/${this.date.getMonth()+1}`

  moneda       : string = 'uf';
  coinType     : string = 'UFs';
  code         : string = '$';
  botonGrafico : string = 'Gráfico Mensual';
  nombreMoneda : string = 'UF'

  constructor(){}
}
