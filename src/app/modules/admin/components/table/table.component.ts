import { Component } from '@angular/core';
import { Dibujo } from 'src/app/models/dibujo';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Creamos colección local de dibujos -> la definimos como array
  coleccionDibujos: Dibujo[] = [];

  dibujoSeleccionado!: Dibujo; // ! <- tomar valores vacíos

  modalVisibleDibujo: boolean = false;

  // Definimos formulario para los dibujos
  /*
   * 
   * Atributos alfanuméricos (string) se inicializan con comillas simples
   * Atributos numéricos (number) se inicializan con cero ('0')
   * 
   */
  dibujo = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0,Validators.required),
    alt: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
  })

  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void {
    // subscribe -> método de notificación de cambios (observable)
    this.servicioCrud.obtenerDibujo().subscribe(dibujo => {
      this.coleccionDibujos = dibujo;
    })
  }

  async agregardibujo() {
    if (this.dibujo.valid) {
      let nuevodibujo: Dibujo = {
        idDibujo: '',
        nombre: this.dibujo.value.nombre!,
        precio: this.dibujo.value.precio!,
        tipo: this.dibujo.value.tipo!,
        imagen: this.dibujo.value.imagen!,
        alt: this.dibujo.value.alt!
      }

      await this.servicioCrud.crearDibujo(nuevodibujo)
        .then(dibujo => {
          alert("Ha agregado un nuevo dibujo con éxito.");
        })
        .catch(error => {
          alert("Ha ocurrido un error al cargar un dibujo.");
        })
    }
  }

  // función vinculada al modal y el botón de la tabla
  mostrarBorrar(dibujoSeleccionado: Dibujo){
    this.modalVisibleDibujo = true;

    this.dibujoSeleccionado = dibujoSeleccionado;
  }

  borrardibujo(){
    this.servicioCrud.eliminarDibujo(this.dibujoSeleccionado.idDibujo)
    .then(respuesta => {
      alert("Se ha podido eliminar con éxito.");
    })
    .catch(error => {
      alert("Ha ocurrido un error al eliminar un dibujo: \n"+error);
    })
  }
}