import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'shared-homesearch',
  templateUrl: './homesearch.component.html',
  styleUrls: ['./homesearch.component.css']
})
export class HomesearchComponent implements OnInit{

  noticias:any [] = [];
  loading = false;

  seleccion = 'Finanzas';

  buscar(){
    console.log(this.seleccion)
    this.loading = true;
    this.newsService.busqueda(this.seleccion)
    this.newsService.getData()
      .subscribe ((response:any) => {
        this.loading = false;
        this.noticias = response.articles
      })
  }

  constructor ( private newsService:NewsService ){}

  ngOnInit(): void {
    this.buscar()
  }



}