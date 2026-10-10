import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgIf } from '@angular/common';   // ✅ importar NgIf
import { AuthenticationService } from '../../service/authentication-service';

@Component({
  selector: 'app-navbar',
  standalone: true, // ✅ marcar como standalone
  imports: [RouterLink, NgIf], // ✅ incluir NgIf
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private authService = inject(AuthenticationService);

  // Saber si hay sesión activa
  get isLoggedIn(): boolean {
    return this.authService.loginTrue();
  }

  // Cerrar sesión
  logout() {
    this.authService.logout();
  }
}
