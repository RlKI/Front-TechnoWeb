import { Injectable } from '@angular/core';
import { Artista } from '../Models/artista.model';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comentario } from '../Models/comentario.model';

@Injectable({
  providedIn: 'root'
})
export class PerfileService {

  constructor(private http: HttpClient) { }

  public getArtistaById(id: string): Observable<Artista> {
    const body = new HttpParams().set('id', id);
    return this.http.get<Artista>(environment.listarArtistaId, { params: body });
  }

  public getCommentsByArtist(id: string): Observable<Comentario[]> {
    const body = new HttpParams().set('id', id);
    return this.http.get<Comentario[]>(environment.listarComentariosArtista, { params: body });
  }

  public addCommentary(content: string, artist: string, user: string) {
    const body = new HttpParams().set('content', content + '')
      .set('artist', artist + '')
      .set('user', user);
    return this.http.post(environment.insertarComentario, body).subscribe();
  }
}
