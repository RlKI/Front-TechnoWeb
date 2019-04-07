import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private user: User = new User();
  constructor() { }


  fillUser(user){
    
  }

  logOut() {
    this.user = new User();
  }

  logIn(){

  }


}
