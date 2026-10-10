import { Routes } from '@angular/router';
import { Cartelera } from './features/cartelera/cartelera';
import { Home } from './features/home/home';
import { Dulceria } from './features/dulceria/dulceria';
import { Proximamente } from './features/proximamente/proximamente';
import { Personal } from './features/personal/personal';
import { Login } from './shared/login/login';
import { Usuarios } from './features/usuarios/usuarios';
import { canactivateguardGuard } from './guards/canactivateguard-guard';
import { CartComponent } from './features/cart/cart';

export const routes: Routes = [
    { path: "home", component: Home },
    { path: "cartelera", component: Cartelera },
    { path: "dulceria", component: Dulceria, canActivate: [canactivateguardGuard] },
    { path: "proximamente", component: Proximamente },
    { path: "personal", component: Personal, canActivate: [canactivateguardGuard] },
    { path: "login", component: Login },
    { path: "registro", component: Usuarios, canActivate: [canactivateguardGuard] },
    { path: "carrito", component: CartComponent},
    { path: "**", component: Home },
];
