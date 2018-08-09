import { Injectable } from '@angular/core';

import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from "@angular/router";

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {//tiene que retiornar true o false
    //next (siguiente pagina)  y state ()
    console.log(next);
    if (this.auth.isAuthenticated()) {//Esto es utilizar el servicio y saber si esta activa la sesion
      console.log("Usuario Autentificado");
      return true;
    } else {
      console.error("Bloqueado por el guard");
      return false;
    }

  }
}
