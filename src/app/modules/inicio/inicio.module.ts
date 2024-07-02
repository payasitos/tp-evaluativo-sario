import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CarrdsComponent } from './components/carrds/carrds.component';
import { MainComponent } from './pages/main/main.component';



@NgModule({
  declarations: [
    CarruselComponent,
    CarrdsComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CarruselComponent,
    CarrdsComponent
  ]
})
export class InicioModule { }
