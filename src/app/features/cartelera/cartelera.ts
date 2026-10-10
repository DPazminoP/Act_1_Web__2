import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../shared/hero/hero';
import { Pelicula } from '../../classes/pelicula';
import { PeliculaService } from '../../services/pelicula-service';
import { CartService } from '../../services/cart-service';

const PRECIO_BOLETO = 5.0; // ajusta el precio

@Component({
  selector: 'app-cartelera',
  standalone: true,
  imports: [Hero, RouterLink],
  templateUrl: './cartelera.html',
  styleUrl: './cartelera.css',
})
export class Cartelera implements OnInit {
  private peliculaService = inject(PeliculaService);
  cartService = inject(CartService);
  peliculas = signal<Pelicula[]>([]);

  ngOnInit() {
    this.peliculaService.obtenerPeliculas().subscribe(datos => {
      this.peliculas.set(datos.peliculas ?? []);
    });
  }

  agregar(pelicula: Pelicula) {
    this.cartService.addItem({
      id: `peli-${pelicula.id}`,
      nombre: `Boleto: ${pelicula.titulo}`,
      descripcion: pelicula.genero,
      precio: PRECIO_BOLETO,
      imagen: pelicula.imagen,
      categoria: 'boleto',
    });
  }
}