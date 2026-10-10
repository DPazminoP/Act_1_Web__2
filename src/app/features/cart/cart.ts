import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent {
  cartService = inject(CartService);
}