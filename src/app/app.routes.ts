import { Routes } from '@angular/router';

import { RegisterComponent } from './components/register-component/register-component';
import { PublicacionComponent } from './components/publicacion-component/publicacion-component';
import { HomeiComponent } from './components/homei-component/homei-component';
import { ChatPrivadoComponent } from './components/chatprivado-component/chatprivado-component';
import { GrupoComponent } from './components/grupo-component/grupo-component';

export const routes: Routes = [
  { path: '', component: HomeiComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'publicacion', component: PublicacionComponent, pathMatch: 'full' },
  { path: 'chat', component: ChatPrivadoComponent, pathMatch: 'full' },
  { path: 'grupos', component: GrupoComponent, pathMatch: 'full' },
]; 