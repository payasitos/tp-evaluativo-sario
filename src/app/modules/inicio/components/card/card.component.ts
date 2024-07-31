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
        idDibujo:"",
        nombre: "icon",
        precio: 2800,
        imagen: "https://f2.toyhou.se/file/f2-toyhou-se/images/46525336_aik3KyhKrrDFa7g.gif",
        tipo: "icon",
        alt: "tamaño de comision tipo headshot/busto."
       },
       {
        idDibujo: " ",
        nombre: "HalfBody",
        precio: 5000,
        imagen: "https://f2.toyhou.se/file/f2-toyhou-se/images/56953423_qnlDJAT17Ph0KXu.png",
        tipo: "halfbody",
        alt: "tamaño de comision tipo halfbody/hasta la cadera.",
       },
       {
         idDibujo: " ",
         nombre: "  FullBody",
         precio: 7900,
         imagen: "https://f2.toyhou.se/file/f2-toyhou-se/images/58846425_fnwjudbqEexTKlc.png",
         tipo: "fullbody",
         alt: "tamaño de comision tipo fullbody/cuerpo completo.",
       }
     ]
  }
}
