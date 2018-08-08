import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html'
})
export class UsuarioNuevoComponent{

  constructor(private router: ActivatedRoute) {
    //Para obtener parametros enviados al padre solo se debe agregar el .parent
    this.router.parent.params.subscribe(parametros => {
      console.log("Constructor Ruta Hija (Nuevo)");
      console.log(parametros.id);
    });
  }


}
