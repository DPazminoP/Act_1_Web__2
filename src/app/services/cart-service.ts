import { Injectable, signal } from '@angular/core';
import { Producto } from '../classes/producto';

@Injectable({ providedIn: 'root' })
export class CartService {
  items = signal<Producto[]>([]);

  addItem(producto: Producto) {
    this.items.update(lista => [...lista, producto]);
  }

  removeItem(id: string) {
    this.items.update(lista => lista.filter(p => p.id !== id));
  }

  clearCart() {
    this.items.set([]);
  }

  getTotal() {
    return this.items().reduce((acc, p) => acc + p.precio, 0);
  }
}
