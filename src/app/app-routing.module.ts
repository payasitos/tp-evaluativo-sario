import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaVisitanteComponent } from './modules/vista-visitante/vista-visitante.component';
import { MainComponent } from './modules/main/main.component';
import { RegistroComponent } from './modules/autentificacion/registro/registro.component';
import { InicioSesionComponent } from './modules/autentificacion/inicio-sesion/inicio-sesion.component';

const routes: Routes = [
  {
    path: "", component: MainComponent
  },
  {
    path: "vista_visitante", component: VistaVisitanteComponent
  },
  {
    path: "main", component: MainComponent
  },
  {
    path: "registro", component: RegistroComponent
  },
  {
    path: "inicio_sesion", component: InicioSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
