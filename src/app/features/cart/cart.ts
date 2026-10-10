import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';   // ✅ importar NgFor
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart',
  standalone: true, // ✅ standalone
  imports: [NgFor], // ✅ incluir NgFor
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
})
export class CartComponent {
  cartService = inject(CartService);

  get items() {
    return this.cartService.items();
  }

  get total() {
    return this.cartService.getTotal();
  }

  remove(id: string) {
    this.cartService.removeItem(id);
  }

  clear() {
    this.cartService.clearCart();
  }
}
