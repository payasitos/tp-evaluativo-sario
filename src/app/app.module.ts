import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// FIREBASE -> Importamos HERRAMIENTAS de la Base de Datos
import { environment } from 'src/enviroments/enviroment'; // vincula a la BD con la app
import { AngularFireModule } from '@angular/fire/compat'; // trabaja con las colecciones de informacion 
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // trabaja con la autentificacion
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // trabaja con imagenes y archivos 
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
