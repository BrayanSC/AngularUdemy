import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Ejemplo de un http get

  // paises: any[] = [];
  // constructor(private http: HttpClient) {
  //   console.log('Contructor Up');
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //     .subscribe((respuesta: any[]) => {
  //       console.log(respuesta);
  //       this.paises= respuesta;
  //   });
  // }
  constructor(){

  }
  
  ngOnInit() {
  }

}
