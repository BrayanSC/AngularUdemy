import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;
  constructor(private activatedRouter: ActivatedRoute,
    private spotify: SpotifyService) {
    this.loading = true;
    this.activatedRouter.params.subscribe((params: any) => {
      this.getArtista(params.id);
      this.getTopTracks(params.id)
    });

  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe(data => {
      this.artista = data;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
      console.log(topTracks);
    });
  }
}
