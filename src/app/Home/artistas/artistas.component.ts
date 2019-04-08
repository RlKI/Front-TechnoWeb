import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { Artista } from 'src/app/Models/artista.model';
import { MatDialog } from '@angular/material';
import { AddArtistaComponent } from '../add-artista/add-artista.component';
import { SesionService } from 'src/app/Services/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {

  artistas: Array<Artista>;

  constructor(private homeService: HomeService, private dialog: MatDialog, private sesionService: SesionService, private router: Router) {
    this.getAllArtistas();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddArtistaComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getAllArtistas();
    });
  }

  getAllArtistas(){
    this.homeService.getArtistas().subscribe(resp =>{
      this.artistas = resp;
    });
  }

  ngOnInit() {
    if (!this.sesionService.getCurrentUser()) {
      this.router.navigateByUrl('/login');
    }
  }

}
