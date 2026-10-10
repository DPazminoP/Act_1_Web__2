import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrabajadorService } from '../../services/trabajador-service';
import { Trabajador } from '../../classes/trabajador';
import { Hero } from '../../shared/hero/hero';
//import { Trabajador } from '../../models/trabajador';

@Component({
  selector: 'app-personal',
  imports: [CommonModule, Hero],
  templateUrl: './personal.html',
  styleUrl: './personal.css',
})
export class Personal implements OnInit {
  private trabajadorService = inject(TrabajadorService);

  trabajadores = signal<Trabajador[]>([]);

  ngOnInit(): void {
    this.trabajadorService.obtenerTrabajadores().subscribe(datos => {
      this.trabajadores.set(datos.items);
    });
  }
}