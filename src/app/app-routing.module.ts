import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './Sesion/registro/registro.component';
import { ArtistasComponent } from './Home/artistas/artistas.component';
import { LoginComponent } from './Sesion/login/login.component';
import { PerfilComponent } from './Artista/perfil/perfil.component';
import { AddArtistaComponent } from './Home/add-artista/add-artista.component';
import { AddComentarioComponent } from './Artista/add-comentario/add-comentario.component';

const routes: Routes = [
  { path: 'home', component: ArtistasComponent },
  { path: 'addArtist', component: AddArtistaComponent },  
  { path: 'addComment', component: AddComentarioComponent },
  { path: 'perfil/:idArtista', component: PerfilComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
