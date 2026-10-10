export interface Producto {
  id: string;          
  nombre: string;      
  descripcion: string; 
  precio: number;      
  imagen: string;      
  categoria: string;   
  stock?: number;      
}
