import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PerfilComponent } from '../perfil/perfil.component';
import { PerfileService } from 'src/app/Services/perfile.service';
import { SesionService } from 'src/app/Services/sesion.service';

@Component({
  selector: 'app-add-comentario',
  templateUrl: './add-comentario.component.html',
  styleUrls: ['./add-comentario.component.css']
})
export class AddComentarioComponent implements OnInit {

  @Input() idArtist:string
  commentary: string;
  constructor(public dialogRef: MatDialogRef<PerfilComponent>, private perfileService:PerfileService, private sesionService:SesionService) { }

  ngOnInit() {
    this.commentary = '';
  }

  addCommentary(){
    this.perfileService.addCommentary(this.commentary, this.idArtist, this.sesionService.getCurrentUser().id);
    this.dialogRef.close();
  }

}
