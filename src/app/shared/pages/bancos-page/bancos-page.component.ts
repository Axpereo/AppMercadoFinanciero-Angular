import { Component, OnInit } from '@angular/core';
import { BancosService } from '../../services/bancos.service';
import { Instituciones } from '../../interfaces/bancos';

@Component({
  selector: 'app-bancos-page',
  templateUrl: './bancos-page.component.html',
  styleUrls: ['./bancos-page.component.css']
})

export class BancosPageComponent implements OnInit{

  instituciones:Instituciones []=[];
  descripciones = 'DescripcionesCodigosDeInstituciones'
  nombres:any[]=[];

  constructor ( private bancosService:BancosService){}

  ngOnInit(): void {
    this.bancosService.getData()
    .subscribe((response:any) => {
      this.instituciones = response[this.descripciones];
      if(this.instituciones != null){
        for(let i=0; i<this.instituciones.length; i++){
          this.nombres.push(this.instituciones[i].NombreInstitucion)
        }
      }})
  }

}



