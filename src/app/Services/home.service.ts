import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artista } from '../Models/artista.model';
import { environment } from 'src/environments/environment';
import { Categoria } from '../Models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getArtistas(): Observable<Artista[]>{
    return this.http.get<Artista[]>(environment.listarArtistas);
  }

  public getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(environment.listarCategorias);
  }

  public addArtista(artista: Artista){
    const body = new HttpParams().set('name', artista.name + '')
    .set('cathegory', artista.cathegory + '').set('img', artista.img + '')
    .set('description', artista.description);
    return this.http.post(environment.insertarArtista, body).subscribe();
  }
}
