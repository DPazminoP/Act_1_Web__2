import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { SnacksComponent } from '../snacks/snacks';

@Component({
  selector: 'app-dulceria',
  imports: [Hero, SnacksComponent],
  templateUrl: './dulceria.html',
  styleUrl: './dulceria.css',
})
export class Dulceria {}
