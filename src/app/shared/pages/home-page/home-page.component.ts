import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  noticias:any [] = [];
  loading = false;

  constructor ( private newsService:NewsService ){}

  ngOnInit(): void {
    this.loading = true;
    this.newsService.getData()
      .subscribe ((response:any) => {
        this.loading = false;
        this.noticias = response.articles
      })
  }



}
