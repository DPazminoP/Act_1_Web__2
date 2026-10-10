import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadosApi } from '../classes/trabajador';
//import { ResultadosApi } from '../models/trabajador';

@Injectable({
  providedIn: 'root',
})
export class TrabajadorService {
  private API_TRABAJADORES = 'https://futuramaapi.com/api/characters';

  private http = inject(HttpClient);

  obtenerTrabajadores(): Observable<ResultadosApi> {
    const params = new HttpParams().set('size', 100);
    return this.http.get<ResultadosApi>(this.API_TRABAJADORES, { params });
  }
}