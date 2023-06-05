import { Component } from '@angular/core';

@Component({
  selector: 'app-ipc',
  templateUrl: './ipc.component.html',
  styleUrls: ['./ipc.component.css']
})
export class IpcComponent{

  date        = new Date();
  currentYear = this.date.getFullYear();

  moneda       : string = 'ipc';
  coinType     : string = 'IPCs';
  code         : string = '%';
  botonGrafico : string = 'Gráfico Anual';
  nombreMoneda : string = 'IPC'

  constructor (){}

}
