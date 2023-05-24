import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { BancosPageComponent } from './shared/pages/bancos-page/bancos-page.component';
import { ContactoPageComponent } from './shared/pages/contacto-page/contacto-page.component';

const routes: Routes = [

  { path:'home', component: HomePageComponent },
  { path:'bancos', component: BancosPageComponent },
  { path:'contacto', component: ContactoPageComponent },

  { path:'valores',
    loadChildren:() => import('./valores/valores.module').then( m => m.ValoresModule) },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
