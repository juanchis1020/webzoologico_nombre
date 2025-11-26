import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-register-component',
  imports: [],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {
 constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // Usa Renderer2 para añadir la clase de forma segura
    // Este estilo 'bg-gradient-primary' hace que el fondo sea azul
    this.renderer.addClass(document.body, 'bg-gradient-primary');
  }
}

