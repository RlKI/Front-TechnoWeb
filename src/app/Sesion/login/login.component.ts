import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { SesionService } from 'src/app/Services/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  user_name: string;
  user_pass: string;

  constructor(private sesionService: SesionService, private router: Router) {
   }

  ngOnInit() {
    if (this.sesionService.getCurrentUser()){
      this.router.navigateByUrl('/home');
    }
  }


  logIn() {
    this.sesionService.logIn(this.user_name, this.user_pass).subscribe(resp =>{
      if(resp && resp.id){
        this.user = resp;
        this.sesionService.fillUser(this.user);
        this.router.navigateByUrl('/home');
      } else {
        alert('Credenciales incorrectas');
      }
    });
  }

}
