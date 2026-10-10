import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuarios } from '../features/usuarios/usuarios';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private API_USUARIOS= 'https://appreact-7b2cf-default-rtdb.europe-west1.firebasedatabase.app/';
  private http = inject(HttpClient);

   //GET
  getUsuarios():Observable<Usuario[]>{
    
    
    return this.http.get<{[key:string]:Usuario}>( `${this.API_USUARIOS}/users.json` ).pipe(
      map(respuesta => {
        if(!respuesta){
          return [];
        }
        return Object.keys(respuesta).map(id=>{
          const usuarioConId = {...respuesta[id], id:id};

          return usuarioConId;
        });
      })
    );
  }

  //Buscar por id:
  getUsuarioById(id:string):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.API_USUARIOS}/users/${id}.json`);
  }

  //Post
  postUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.API_USUARIOS}/users.json`, usuario);
  }

  //Put
  putUsuario(id:string, usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.API_USUARIOS}/users/${id}.json`, usuario);
  }

  //Delete
  deleteUsuario(id:string):Observable<void>{
    return this.http.delete<void>(`${this.API_USUARIOS}/users/${id}.json`);
  }
}