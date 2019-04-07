import { Component, OnInit, Inject } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { Categoria } from 'src/app/Models/categoria.model';
import { Artista } from 'src/app/Models/artista.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ArtistasComponent } from '../artistas/artistas.component';

@Component({
  selector: 'app-add-artista',
  templateUrl: './add-artista.component.html',
  styleUrls: ['./add-artista.component.css']
})
export class AddArtistaComponent implements OnInit {

  artDescription: string;
  artImg: string;
  artName: string;
  artCathegory: Categoria;
  artista: Artista;
  categorias: Array<Categoria>;

  constructor(private homeService: HomeService, public dialogRef: MatDialogRef<ArtistasComponent>) {
    homeService.getCategorias().subscribe(resp =>{
      this.categorias = resp;
    });
   }

   addArtista() {
    this.artista = {
      name: this.artName,
      cathegory: this.artCathegory.id,
      description: this.artDescription,
      img: this.artImg
    };
    this.homeService.addArtista(this.artista);
    this.dialogRef.close();
   }

  ngOnInit() {
  }

}
