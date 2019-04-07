import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  user_name: string;
  user_pass: string;

  constructor() {
    console.log("arroz")
   }

  ngOnInit() {
  }
  

  logIn() {

  }

}
