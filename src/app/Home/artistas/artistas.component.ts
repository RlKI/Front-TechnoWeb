import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { Artista } from 'src/app/Models/artista.model';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {

  artistas: Array<Artista>;

  constructor(private homeService: HomeService) {
    homeService.getArtistas().subscribe(resp =>{
      this.artistas = resp;
    });
  }


  ngOnInit() {
  }

}
