import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = 'BQDWtsVjA2fxS6CnoB3ncjt5z2iHi5hnwo8FDrxz2bUz3HSvkHXDRzX2B8knXb1YwpwFZ5fwEjqLgokMNx0';
  constructor(private http: HttpClient) {
    console.log("Spotify Service Ready");
  }
  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(url, { headers });
  }


  getNewRelease() {
    //Tip: Cuando una funcion de flecha tiene una unica linea el return se puede quitar y dejar como se vera. Comparar con las otras
    return this.getQuery("browse/new-releases?limit=20")
      .pipe(map((data: any) => data.albums.items));
    //     .subscribe(data => {
    //       console.log(data);
    //     });
    //Se quito para matipular la data en el componente
  }

  getArtistas(termino: string) {
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.token}`
    // });
    return this.getQuery(`search?query=${termino}&type=artist&market=CR&offset=0&limit=15`)
      .pipe(map((data: any) => {
        return data.artists.items;
      }));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
      // .pipe(map((data: any) => data.artists.items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map( (data:any) => data.tracks));
      // .pipe(map((data: any) => data.artists.items));
  }

}
