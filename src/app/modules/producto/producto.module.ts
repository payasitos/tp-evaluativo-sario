import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// VISTAS DEL MODULO PRODUCTO
import { ProductoRoutingModule } from './producto-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { TosComponent } from './tos/tos.component';
import { ComisionesComponent } from './comisiones/comisiones.component';


@NgModule({
  declarations: [
    ContactoComponent,
    PortafolioComponent,
    TosComponent,
    ComisionesComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
