import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//ElementRef es para ver o cambiar el elemento referenciado en los componentes
//HostListener Esta pendiende de lo que sucede con el elemento que tiene como etiqueta la directiva appResaltado
@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log("Directive Up");
    //el.nativeElement.style.backgroundColor = "yellow";
  }
  @Input("appResaltado") nuevoColor: string;

  // cuando pasa el mouse por sobre el elemento se pone amarillo
  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');
    //Si el color es null envia yellow
  }

  // cuando sale el mouse del elemento se le quita el color
  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
