import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadosSnacks } from '../classes/snack';

@Injectable({ providedIn: 'root' })
export class SnackService {
  private API_SNACKS = '/data/snacks.json';
  private http = inject(HttpClient);

  obtenerSnacks(): Observable<ResultadosSnacks> {
    return this.http.get<ResultadosSnacks>(this.API_SNACKS);
  }
}
