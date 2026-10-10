import { Component } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { Hero } from "../../shared/hero/hero";
import { Specialities } from '../../shared/specialities/specialities';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, Specialities],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
