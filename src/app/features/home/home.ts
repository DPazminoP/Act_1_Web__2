import { Component } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { Hero } from "../../shared/hero/hero";

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
