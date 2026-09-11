import { ResultadosApi } from './../classes/libro';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  private API_LIBROS = 'https://gutendex.com/books/';
  private http=inject(HttpClient);
  obtenerLibros():Observable<ResultadosApi>{
    return this.http.get<ResultadosApi>(this.API_LIBROS);
  }


}
