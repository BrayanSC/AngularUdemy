import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
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

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor( private spotify: SpotifyService){
    this.loading = true;
    this.error = false;
    this.spotify.getNewRelease()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio) =>{
      this.error = true;
      console.log(errorServicio);
      this.errorMessage = errorServicio.error.error.message;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
