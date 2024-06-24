import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { MainComponent } from './main/main.component';
import { VistaVisitanteComponent } from './vista-visitante/vista-visitante.component';



@NgModule({
  declarations: [
    InicioSesionComponent,
    RegistroComponent,
    MainComponent,
    VistaVisitanteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
