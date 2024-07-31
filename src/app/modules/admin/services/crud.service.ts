import { Injectable } from '@angular/core';
import { Dibujo } from 'src/app/models/dibujo';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // Definimos coleccion para los productos de la web
  private DibujosCollection: AngularFirestoreCollection<Dibujo>

  constructor(private database: AngularFirestore) {
    this.DibujosCollection = database.collection('Dibujo')
  }

  // CREAR productos
  crearDibujo(dibujo: Dibujo) {
    return new Promise(async (resolve, reject) => {
      try {
        const idDibujo = this.database.createId();
        dibujo.idDibujo = idDibujo;

        const resultado = await this.DibujosCollection.doc(idDibujo).set(dibujo);

        resolve(resultado);
      } catch (error) {
        reject(error);
      }
    })
  }
  // OBTENER productos
  // EDITAR productos
  // ELIMINAR productos
}





