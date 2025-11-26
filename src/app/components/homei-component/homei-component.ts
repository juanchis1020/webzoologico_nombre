import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-homei-component',
  imports: [],
  templateUrl: './homei-component.html',
  styleUrl: './homei-component.css',
})
export class HomeiComponent {
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // Usa Renderer2 para añadir la clase de forma segura
    // Este estilo 'bg-gradient-primary' hace que el fondo sea azul
    this.renderer.addClass(document.body, 'bg-gradient-primary');
  }
}

