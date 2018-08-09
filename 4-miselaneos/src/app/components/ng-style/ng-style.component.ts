import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
   <p [style.fontSize.px]="tamano">
  Hola mundo. Es una Etiqueta
  </p>
  <button class="btn btn-primary" (click)="tamano = tamano + 5">
    <i class="fa fa-plus"></i>
  </button>
  <button class="btn btn-primary" (click)="tamano = tamano - 5">
    <i class="fa fa-minus"></i>
  </button>
  `,
  //Esto tambien se puede importar de un archivo
  styles: [`
  p {
    color:red;
    font-size: 20px;
  }
  `]
  
  //Primer ejemplo del ngStyle
  //  <p [ngStyle]="{ 'font-size': '20px' }">
  // Hola mundo. Es una Etiqueta
  // </p>
})
export class NgStyleComponent implements OnInit {

  tamano: number = 20;
  constructor() { }

  ngOnInit() {
  }

}
