import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODAS LAS VISTAS DEL MÓDULO PRODUCTO
import { ProductoModule } from './producto.module';
import { ComisionesComponent } from './comisiones/comisiones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { TosComponent } from './tos/tos.component';

const routes: Routes = [
  {
    path:"comisiones",component:ComisionesComponent
  },
  {
    path:"contacto",component:ContactoComponent
  },
  {
    path:"portafolio",component:PortafolioComponent
  },
  {
    path:"tos",component:TosComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
