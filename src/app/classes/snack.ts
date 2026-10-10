export interface Snack {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    categoria: string;
}

export interface ResultadosSnacks {
    snacks: Snack[];
}
