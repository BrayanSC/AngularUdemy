import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  usuario: Object ={
    nombre:"Brayan",
    apellido: "Saborio",
    correo: "scbrayan@gmail.com"
  };
  constructor() { }


  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm: ", forma);
    console.log("Valor: ", forma.value);
    console.log("Usuario: ", this.usuario);
  }

}
