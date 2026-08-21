import { Routes } from '@angular/router';
import { Cartelera } from './features/cartelera/cartelera';
import { Home } from './features/home/home';
import { Dulceria } from './features/dulceria/dulceria';
import { Proximamente } from './features/proximamente/proximamente';

export const routes: Routes = [
    {path:"home", component:Home}
    {path:"cartelera", component:Cartelera}
    {path:"dulceria", component:Dulceria}
    {path:"proximamente", component:Proximamente}

];
