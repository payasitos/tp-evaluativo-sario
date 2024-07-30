import { Component } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { Dibujo } from 'src/app/models/dibujo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   // PROPIEDAD PÚBLICA (TIPO: ARRAY)
   public info: Dibujo[];
  
   constructor(){
     this.info = [
       {
        id:"",
        nombre: "icon",
        precio: 2800,
        imagen: "https://f2.toyhou.se/file/f2-toyhou-se/images/46525336_aik3KyhKrrDFa7g.gif",
        alt: "tamaño de comision tipo headshot/busto."
       },
       {
        id: " ",
        nombre: "HalfBody",
        precio: 5000,
        imagen: "https://f2.toyhou.se/file/f2-toyhou-se/images/56953423_qnlDJAT17Ph0KXu.png",
        alt: "tamaño de comision tipo halfbody/hasta la cadera.",
       },
       {
         id: " ",
         nombre: "  FullBody",
         precio: 7900,
         imagen: "https://f2.toyhou.se/file/f2-toyhou-se/images/58846425_fnwjudbqEexTKlc.png",
         alt: "tamaño de comision tipo fullbody/cuerpo completo.",
       }
     ]
  }
}
