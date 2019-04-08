import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artista } from 'src/app/Models/artista.model';
import { SesionService } from 'src/app/Services/sesion.service';
import { PerfileService } from 'src/app/Services/perfile.service';
import { Comentario } from 'src/app/Models/comentario.model';
import { MatDialog } from '@angular/material';
import { AddComentarioComponent } from '../add-comentario/add-comentario.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  artista: Artista = new Artista();
  comments: Comentario[] = new Array<Comentario>();
  constructor(private sesionService: SesionService, private perfileService: PerfileService, private router: Router, private route: ActivatedRoute,  private dialog: MatDialog) {
    this.artista.id = this.route.snapshot.params['idArtista'];
  }

  ngOnInit() {
    if (!this.sesionService.getCurrentUser()) {
      this.router.navigateByUrl('/login');
    }
    else {
      this.perfileService.getArtistaById(this.artista.id).subscribe(resp => {
        if (resp && resp.id == this.artista.id) {
          this.artista = resp;
          this.getComments();
        }
        else {
          alert("No se encontro el artista")
        }
      });
    }
  }

  getComments(){
    this.perfileService.getCommentsByArtist(this.artista.id).subscribe(respCom => {
      this.comments = respCom;
    });
  }

  openDialog(){
    const dialogRef = this.dialog.open(AddComentarioComponent);
    dialogRef.componentInstance.idArtist = this.artista.id;

    dialogRef.afterClosed().subscribe(result => {
      this.getComments();
    });
  }


}
