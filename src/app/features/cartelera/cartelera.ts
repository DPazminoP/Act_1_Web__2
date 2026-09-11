import { Component, inject, signal } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Pelicula, ResultadosPeliculas } from '../../classes/pelicula';
import { PeliculaService } from '../../services/pelicula-service';

@Component({
  selector: 'app-cartelera',
  imports: [Hero],
  templateUrl: './cartelera.html',
  styleUrl: './cartelera.css',
})
export class Cartelera {
  private peliculaService = inject(PeliculaService);
  peliculas = signal<Pelicula[]>([]);

  ngOnInit() {
    this.peliculaService.obtenerPeliculas().subscribe(datos => {
      this.peliculas.set(datos.peliculas);
    });
  }
}

