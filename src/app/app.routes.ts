import { Routes } from '@angular/router';
import { Juego } from './juego/juego';
import { Funcionamiento } from './pages/funcionamiento/funcionamiento';

export const routes: Routes = [
    {path: 'juego', component: Juego},
    {path: '', component: Funcionamiento}
];
