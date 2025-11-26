import { Routes } from '@angular/router';

import { RegisterComponent } from './components/register-component/register-component';
import { PublicacionComponent } from './components/publicacion-component/publicacion-component';
import { HomeiComponent } from './components/homei-component/homei-component';
import { Login } from './authentication/login/login';
import { Signup } from './authentication/signup/signup';


import { ChatPrivadoComponent } from './components/chatprivado-component/chatprivado-component';
import { GrupoComponent } from './components/grupo-component/grupo-component';

export const routes: Routes = [
  { path: 'chat', component: ChatPrivadoComponent },
  { path: 'grupo', component: GrupoComponent },
      {path: 'login', component: Login},
       { path: 'signup', component: Signup, pathMatch: 'full' },

  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'publicacion', component: PublicacionComponent, pathMatch: 'full' },
  { path: '', component: HomeiComponent, pathMatch: 'full' }
]; 