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
  // Creamos colección local de productos -> la definimos como array
  coleccionDibujos: Dibujo[] = [];

  // Definimos formulario para los productos
  /**
   * Atributos alfanuméricos (string) se inicializan con comillas simples
   * Atributos numéricos (number) se inicializan con cero ('0')
   */
  dibujo = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0,Validators.required),
    alt: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
  })

  constructor(public servicioCrud: CrudService){}
}