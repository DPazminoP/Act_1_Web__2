import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";

@Component({
  selector: 'app-cartelera',
  imports: [Hero],
  templateUrl: './cartelera.html',
  styleUrl: './cartelera.css',
})
export class Cartelera {}
