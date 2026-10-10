import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadosPeliculas } from '../classes/pelicula';

@Injectable({ providedIn: 'root' })
export class PeliculaService {
  private API_PELICULAS = 'https://raw.githubusercontent.com/DPazminoP/peliculas-json/refs/heads/main/peliculas.json';
  private http = inject(HttpClient);

  obtenerPeliculas(): Observable<ResultadosPeliculas> {
    return this.http.get<ResultadosPeliculas>(this.API_PELICULAS);
  }
}

