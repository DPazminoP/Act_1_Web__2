export interface Producto {
  id: string;           // identificador único (puede ser generado por Firebase o UUID)
  nombre: string;       // nombre del producto
  descripcion: string;  // breve descripción
  precio: number;       // precio unitario
  imagen: string;       // URL de la imagen del producto
  categoria: string;    // categoría (ej: "bebida", "snack", "entrada")
  stock?: number;       // opcional: cantidad disponible en inventario
}
