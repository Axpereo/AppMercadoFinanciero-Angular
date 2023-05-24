import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { TitleComponent } from './components/title/title.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavtabComponent } from './components/navtab/navtab.component';
import { HomesearchComponent } from './components/homesearch/homesearch.component';
import { FormsModule } from '@angular/forms';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { BancosPageComponent } from './pages/bancos-page/bancos-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';



@NgModule({
  declarations: [
    TitleComponent,
    NavbarComponent,
    HomePageComponent,
    SpinnerComponent,
    NavtabComponent,
    HomesearchComponent,
    DropdownMenuComponent,
    BancosPageComponent,
    ContactoPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    TitleComponent,
    NavbarComponent,
    SpinnerComponent,
    NavtabComponent,
    HomesearchComponent,
    DropdownMenuComponent,
  ]
})
export class SharedModule { }
