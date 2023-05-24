import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DolarComponent } from "./pages/dolar/dolar.component";
import { EuroComponent } from "./pages/euro/euro.component";
import { UfComponent } from "./pages/uf/uf.component";
import { UtmComponent } from "./pages/utm/utm.component";
import { IpcComponent } from "./pages/ipc/ipc.component";
import { DolarpruebaComponent } from "./pages/dolarprueba/dolarprueba.component";

const routes: Routes =[
    { path:'dolar', component: DolarComponent},
    { path:'euro', component: EuroComponent },
    { path:'uf', component: UfComponent },
    { path:'utm', component: UtmComponent },
    { path:'ipc', component: IpcComponent },

    { path:'dolarprueba', component: DolarpruebaComponent },

    { path:'**', redirectTo:'home' },
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ValoresRoutingModule{}