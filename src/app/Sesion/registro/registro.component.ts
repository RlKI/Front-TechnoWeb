import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: User = new User();

  constructor() { }

  ngOnInit() {
  }


  registroClick(){
    
  }

}
