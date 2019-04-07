import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { SesionService } from 'src/app/Services/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: User = new User();

  constructor(private sesionService: SesionService, private router: Router) { }

  ngOnInit() {
    if(this.sesionService.getCurrentUser()){
      this.router.navigateByUrl('/home')
    }
  }


  registroClick() {
    let validar = this.validarCampos();
    if (validar == "true") {
      this.sesionService.addUsuario(this.user);
    }
    else {
      alert(validar);
    }
  }

  validarCampos(): string {
    if (this.user.nickName = "") {
      return "Falta NickName";
    }
    if (this.user.firstName = "") {
      return "Falta Nombre";
    }
    if (this.user.lastName = "") {
      return "Falta Apellido";
    }
    if (this.user.password = "") {
      return "Falta Contraseña";
    }
    return "true";
  }

}
