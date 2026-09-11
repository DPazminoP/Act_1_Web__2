export interface Pelicula {
    id: number;
    titulo: string;
    genero: string;
    descripcion: string;
    anio: number;
    imagen: string;
}

export interface ResultadosPeliculas {
    peliculas: Pelicula[];
}
