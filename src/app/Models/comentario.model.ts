import { Artista } from './artista.model';
import { User } from './user.model';

export class Comentario {
  id: string;
  content: string;
  aritst: Artista;
  user: User;
}
