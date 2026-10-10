import { Component } from '@angular/core';

@Component({
  selector: 'app-specialities',
  imports: [],
  templateUrl: './specialities.html',
  styleUrl: './specialities.css',
})
export class Specialities {
  subtitulo: string = 'Servicios disponibles de Planet Express';
  especialidadseleccionada: string = 'ninguno';

  // Lista de servicios ficticios de Planet Express
  especialidades = [
    {
      id: 1,
      nombre: "Transportes Interplanetarios",
      descripcion: "Viajes rápidos y seguros entre planetas.",
      imagen: "https://i.postimg.cc/Gm9Q6W0R/Planet-express.webp",
      activo: true
    },
    {
      id: 2,
      nombre: "Entregas Especiales",
      descripcion: "Paquetes urgentes entregados en cualquier rincón del universo.",
      imagen: "https://i.postimg.cc/Gm9Q6W0R/Planet-express.webp",
      activo: true
    },
    {
      id: 3,
      nombre: "Protección de Carga",
      descripcion: "Seguridad garantizada contra piratas espaciales.",
      imagen: "https://i.postimg.cc/Gm9Q6W0R/Planet-express.webp",
      activo: true
    },
    {
      id: 4,
      nombre: "Exploración y Aventuras",
      descripcion: "Misiones peligrosas con tripulación experimentada.",
      imagen: "https://i.postimg.cc/Gm9Q6W0R/Planet-express.webp",
      activo: false
    },
    {
      id: 5,
      nombre: "Investigación Científica",
      descripcion: "Proyectos intergalácticos con el Profesor Farnsworth.",
      imagen: "https://i.postimg.cc/Gm9Q6W0R/Planet-express.webp",
      activo: true
    },
    {
      id: 6,
      nombre: "Rescate Espacial",
      descripcion: "Operaciones de emergencia en cualquier sistema solar.",
      imagen: "https://i.postimg.cc/Gm9Q6W0R/Planet-express.webp",
      activo: true
    }
  ];

  especialidadesFiltradas = this.especialidades;

  // Seleccionar servicio
  seleccionar(nombre: string) {
    this.especialidadseleccionada = nombre;
  }

  // Buscar servicio
  buscar(event: Event) {
    const servicioBuscar = (event.target as HTMLInputElement).value;
    this.subtitulo = `Resultados para: ${servicioBuscar}`;
    this.especialidadesFiltradas = this.especialidades.filter(e =>
      e.nombre.toLowerCase().includes(servicioBuscar.toLowerCase())
    );
  }
}
