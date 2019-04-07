import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Sesion/login/login.component';
import { RegistroComponent } from './Sesion/registro/registro.component';
import { ArtistasComponent } from './Home/artistas/artistas.component';
import { AddArtistaComponent } from './Home/add-artista/add-artista.component';
import { PerfilComponent } from './Artista/perfil/perfil.component';
import { AddComentarioComponent } from './Artista/add-comentario/add-comentario.component';

// ======================================
// Material
// ======================================
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ArtistasComponent,
    AddArtistaComponent,
    PerfilComponent,
    AddComentarioComponent,
    MatButtonModule,
    MatCheckboxModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
