import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private user: User = new User();
  constructor(private http: HttpClient) { }


  fillUser(user) {
    this.user = user;
  }

  getCurrentUser() {
    return this.user;
  }

  logOut() {
    this.user = new User();
  }

  public logIn(user_name: string, pass: string): Observable<User> {
    const body = new HttpParams().set('nick', user_name + '')
      .set('pass', pass);
     return this.http.get<User>(environment.getUsuarioNickPass, { params: body });

  }


}
