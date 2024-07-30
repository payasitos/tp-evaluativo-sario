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
    path:"producto",component:ProductoComponent
  },
  {
    path:"alimentacion",component:AlimentacionComponent
  },
  {
    path:"indumentaria",component:IndumentariaComponent
  },
  {
    path:"juguetes",component:JugueteComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
