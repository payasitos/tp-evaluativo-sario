import { Injectable } from '@angular/core';
import { Dibujo } from 'src/app/models/dibujo';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, ReplaySubject } from 'rxjs';

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
  obtenerDibujo(){
    /*
      snapshotChanges => toma captura del estado de los datos
      pipe => tuberías que retornan un nuevo arreglo
      map => "mapea" o recorre esa nueva información
      a => resguarda la nueva información y la envía como un documento 
    */
    return this.DibujosCollection.snapshotChanges()
    .pipe(map(action => action.map(a => a.payload.doc.data())))
  }

  // EDITAR productos
  ModificarDibujo(idDibujo: string, nuevaData: Dibujo){
  /*
  accedemos a la coleccion "productos" de la base de datos, buscamos el ID
  del producto seleccionado y lo actualizamos con el metodo "update" enviando
  la nueva informacion
  */

    return this.database.collection('dibujo').doc(idDibujo).update(nuevaData);
  }

  // ELIMINAR productos
  eliminarDibujo(idDibujo: string){
    return new Promise((resolve, reject)=>{
      try{
        const respuesta = this.DibujosCollection.doc(idDibujo).delete();

        resolve (respuesta);
      }
      catch(error){
        reject (error);
      }
    })
  }
}





