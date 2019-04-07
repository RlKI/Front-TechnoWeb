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
import { HttpClientModule } from '@angular/common/http';


// ======================================
// Material
// ======================================
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ArtistasComponent,
    AddArtistaComponent,
    PerfilComponent,
    AddComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
