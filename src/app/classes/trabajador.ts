export interface Trabajador {
    id: number;
    name: string;
    gender: string;
    status: string;
    species: string;
    createdAt: string;
    image: string | null;
}

export interface ResultadosApi {
    items: Trabajador[];
    total: number;
    page: number;
    size: number;
    pages: number;
}