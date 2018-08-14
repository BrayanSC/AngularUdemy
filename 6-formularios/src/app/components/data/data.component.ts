import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { THIS_EXPR } from '../../../../node_modules/@angular/compiler/src/output/output_ast';
import { Observable } from '../../../../node_modules/rxjs';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  usuario: Object = {
    nombreCompleto: {
      nombre: 'Brayan',
      apellido: 'Saborio'
    },
    correo: 'brayansaborio@email.com'
    // pasaTiempos: ["Correr","Dormir","Comer"]
  }
  forma: FormGroup;
  //para enlazar el form con el del html se debe colocar en la etiqueta del form [formGroup]="forma"
  constructor() {
    console.log(this.usuario);
    this.forma = new FormGroup({
      //FormControl(valorpordefecto, reglasdevalidacion, reglasdevalidacionAsyncronicas)
      //Para enlazar el valor con defecto con el html se debe colocar en el input -> formControlName='nombre' //aqui nombdre del atributo de abajo
      //reglasdevalidacion si es una se coloca si son varias se colocan en una lista []
      //reglasdevalidacionAsyncronicas si es una se coloca si son varias se colocan en una lista []

      // 'nombre': new FormControl('DefaulName', [
      //   Validators.required,
      //   Validators.minLength(3)
      // ]),
      // 'apellido': new FormControl('', Validators.required),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),

      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('defaulNameObject', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl('', [
          Validators.required,
          this.noSaborio
        ])
      }),
      'pasaTiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      // utilizando una validacion asyncronica
      'usuario': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl('', [
        Validators.required,
        this.noIgual.bind(this.forma)
      ])

    })
    // this.forma.controls['password2'].setValidators([
    //   Validators.required,
    //     this.noIgual
    // ])

    // El objeto debe tener obligatoriamente la misma estructura del FormGroup
    // this.forma.setValue(this.usuario);

  }

  guardarCambios() {
    console.log("GuardarCambios")
    // console.log(this.forma.value)
    // console.log(this.forma)
    this.forma.reset(this.usuario);
  }
  agregarPasatiempo() {
    console.log("Nuevo Pasatiempo");
    (<FormArray>this.forma.controls['pasaTiempos']).push(
      new FormControl('Dormir', Validators.required)
    )
  }

  // Esto es una validacion para que nadie pueda llamarse 'saborio'
  //ver como se implemente en el formcontrol de apellido
  //en la implementacion se coloca  noSaborio porque le dice al FormControl con que puede validarlo
  noSaborio(control: FormControl): { [s: string]: boolean } {
    if(control.value === 'saborio'){
      // devuelve true si la validacion es correcta y el error existe
      return {
        nobrayan:true
      }
    }
    return null;
  }

  noIgual(control: FormControl): any {

    // console.log(this);
    // let forma:any = this;

    // if(control.value !== (forma.controls['password1']).value ){
    //   // devuelve true si la validacion es correcta y el error existe
    //   return {  
    //     noiguales:true
    //   }
    // }

    //por alguna razon no funciona el this
    return null;
  }


  //simulando ser async
  existeUsuario(control: FormControl): Promise<any>|Observable<any> {
    let promesa = new Promise(
      (resolve, rejec)=>{
        setTimeout(()=>{
          if(control.value === 'frago'){
            resolve ({existe:true})
          }else{
            resolve(null)
          }
        },5000)
    });
    return promesa;
  }
}
