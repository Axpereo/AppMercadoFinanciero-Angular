import { Component } from '@angular/core';
import Swal from 'sweetalert2'

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

    if(this.nombre === '' || this.correo === '' || this.titulo === '' || this.comentario === ''){
      Swal.fire({
        title: 'Error!',
        text: 'Completa todos los campos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }else{
      Swal.fire({
        title: 'Enviado!',
        text: 'Tu solicitud está siendo revisada',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }



  }

}
