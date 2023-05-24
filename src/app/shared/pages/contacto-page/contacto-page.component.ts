import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto-page',
  templateUrl: './contacto-page.component.html',
  styleUrls: ['./contacto-page.component.css']
})
export class ContactoPageComponent {

  nombre:string = '';
  correo:string = '';
  titulo:string = '';
  comentario:string = '';

  constructor(){}

  enviar():void{
    console.log(this.nombre)
    console.log(this.correo)
    console.log(this.titulo)
    console.log(this.comentario)
    alert('Por ahora no necesitamos tus comentarios ;) Buen Intento!')
  }

}
