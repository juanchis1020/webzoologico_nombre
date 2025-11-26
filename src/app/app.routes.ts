import { Routes } from '@angular/router';

import { RegisterComponent } from './components/register-component/register-component';
import { PublicacionComponent } from './components/publicacion-component/publicacion-component';
import { HomeiComponent } from './components/homei-component/homei-component';
import { Login } from './authentication/login/login';
import { Signup } from './authentication/signup/signup';

import { ChatPrivadoComponent } from './components/chatprivado-component/chatprivado-component';
import { GrupoComponent } from './components/grupo-component/grupo-component';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },

  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'publicacion', component: PublicacionComponent, pathMatch: 'full' },

  { path: 'grupo', component: GrupoComponent, pathMatch: 'full' },
  { path: 'chat', component: ChatPrivadoComponent, pathMatch: 'full' },

  { path: '', component: HomeiComponent, pathMatch: 'full' },
]; 