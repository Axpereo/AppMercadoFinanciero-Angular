import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Coins } from '../../interfaces/valores';

@Component({
  selector: 'component-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit{

  coins:Coins[]=[];

  @Input() public moneda:any;
  @Input() public coinType:any;
  @Input() public code:any;
  @Input() public currentYear:any;

  @Output() mesSeleccionado = new EventEmitter<string>();
  @Output() anioSeleccionado = new EventEmitter<string>();

  monthSelect: string = '0';
  yearSelect : string = '0';

  yearList = ['2023','2022','2021','2020'];
  monthList = ['01','02','03','04','05','06','07','08','09','10','11','12'];

  constructor ( ){}

  ngOnInit(): void {}


  mes(){
    this.mesSeleccionado.emit(this.monthSelect)
  }
  anio(){
    this.anioSeleccionado.emit(this.yearSelect)
  }

  getSelect = ():void =>{
    this.mes()
    this.anio()
  
  }
}
