import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ValoresRoutingModule } from './valores-routing.module';

import { DolarComponent } from './pages/dolar/dolar.component';
import { EuroComponent } from './pages/euro/euro.component';
import { UfComponent } from './pages/uf/uf.component';
import { UtmComponent } from './pages/utm/utm.component';
import { IpcComponent } from './pages/ipc/ipc.component';
import { TableComponent } from './components/table/table.component';
import { DolarpruebaComponent } from './pages/dolarprueba/dolarprueba.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { SelectComponent } from './components/select/select.component';
import { RecargaDirective } from './directives/recarga.directive';



@NgModule({
  declarations: [
    DolarComponent,
    EuroComponent,
    UfComponent,
    UtmComponent,
    IpcComponent,

    TableComponent,
    GraficoComponent,

    DolarpruebaComponent,
     SelectComponent,
     RecargaDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,
    ValoresRoutingModule,
  ]
})

export class ValoresModule { }
