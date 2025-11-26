import { Component, Renderer2 } from '@angular/core';
import { Authentication } from '../../services/authentication';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
   imports: [FormsModule] 
})
export class RegisterComponent {

  constructor(
    private renderer: Renderer2,
    private auth: Authentication,
    private router: Router
  ) {}

  onRegister(form: any) {
    if (form.invalid) return;

    this.auth.register(form.value).subscribe({
      next: (res) => {
        console.log("Usuario registrado", res);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error("Error al registrar", err);
      }
    });
  }
}

