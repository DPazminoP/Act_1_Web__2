import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Snack } from '../../classes/snack';
import { SnackService } from '../../services/snack-service';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-snacks',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './snacks.html',
  styleUrl: './snacks.css',
})
export class SnacksComponent implements OnInit {
  private snackService = inject(SnackService);
  cartService = inject(CartService);
  snacks = signal<Snack[]>([]);

  ngOnInit() {
    this.snackService.obtenerSnacks().subscribe(datos => {
      this.snacks.set(datos.snacks);
    });
  }

  agregar(snack: Snack) {
    this.cartService.addItem(snack);
  }
}