import { computed, Injectable, signal } from '@angular/core';
import { Producto } from '../classes/producto';

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  readonly items = signal<ItemCarrito[]>([]);

  readonly total = computed(() =>
    this.items().reduce((acc, i) => acc + i.producto.precio * i.cantidad, 0)
  );

  readonly cantidadTotal = computed(() =>
    this.items().reduce((acc, i) => acc + i.cantidad, 0)
  );

  addItem(producto: Producto) {
    this.items.update(lista => {
      const existe = lista.some(i => i.producto.id === producto.id);
      if (existe) {
        return lista.map(i =>
          i.producto.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      return [...lista, { producto, cantidad: 1 }];
    });
  }

  decreaseItem(id: string) {
    this.items.update(lista =>
      lista
        .map(i => (i.producto.id === id ? { ...i, cantidad: i.cantidad - 1 } : i))
        .filter(i => i.cantidad > 0)
    );
  }

  removeItem(id: string) {
    this.items.update(lista => lista.filter(i => i.producto.id !== id));
  }

  clearCart() {
    this.items.set([]);
  }
}