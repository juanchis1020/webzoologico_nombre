import { Routes } from '@angular/router';

import { RegisterComponent } from './components/register-component/register-component';
import { PublicacionComponent } from './components/publicacion-component/publicacion-component';
import { HomeiComponent } from './components/homei-component/homei-component';

import { Login } from './components/authentication/login/login';
import { SignupComponent } from './components/authentication/signup/signup';

export const routes: Routes = [
     {path: 'register', component: RegisterComponent},
  { path: 'publicacion', component: PublicacionComponent, pathMatch: 'full' },
    {path: 'login', component: Login},
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: '', component: HomeiComponent, pathMatch: 'full' }
];





