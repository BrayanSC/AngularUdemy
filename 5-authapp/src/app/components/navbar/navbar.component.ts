import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService) { 
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

  public login(){
    this.auth.login();
  }

  public salir(){
    this.auth.logout();
  }

}