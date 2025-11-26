import { Routes } from '@angular/router';

import { RegisterComponent } from './components/register-component/register-component';
import { PublicacionComponent } from './components/publicacion-component/publicacion-component';
import { HomeiComponent } from './components/homei-component/homei-component';
import { Login } from './authentication/login/login';
import { Signup } from './authentication/signup/signup';

import { ChatPrivadoComponent } from './components/chatprivado-component/chatprivado-component';
import { GrupoComponent } from './components/grupo-component/grupo-component';

export const routes: Routes = [
  { path: '', component: HomeiComponent, pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'register', component: RegisterComponent },

  { path: 'publicacion', component: PublicacionComponent },

  // Rutas que tú necesitabas
  { path: 'chat', component: ChatPrivadoComponent },
  { path: 'grupo', component: GrupoComponent },
]; 