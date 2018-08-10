import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  forma: FormGroup;
  constructor() {

    this.forma = new FormGroup({
      //FormControl(valorpordefecto, reglasdevalidacion, reglasdevalidacionAsyncronicas)
      //reglasdevalidacion si es una se coloca si son varias se colocan en una lista []
      //reglasdevalidacionAsyncronicas si es una se coloca si son varias se colocan en una lista []
      'nombre': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'apellido': new FormControl('', Validators.required),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ])

    })

  }

  guardarCambios() {
    console.log("GuardarCambios")
    console.log(this.forma.value)
    console.log(this.forma)
  }

}
