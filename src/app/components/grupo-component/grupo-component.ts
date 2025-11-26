import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // Necesario para *ngIf y *ngFor
import { FormsModule } from '@angular/forms';     // Necesario para [(ngModel)]
import { GrupoService } from '../../services/grupo-service';

@Component({
  selector: 'app-grupo',
  standalone: true,
  imports: [CommonModule, FormsModule],  // <-- IMPORTANTE
  templateUrl: './grupo-component.html',
  styleUrls: ['./grupo-component.css']
})
export class GrupoComponent {

  nombre = "";
  descripcion = "";
  tema = "";
  grupos: any[] = [];

  constructor(private grupoService: GrupoService) {}

  ngOnInit(): void {
    this.cargarGrupos();
  }

  cargarGrupos() {
    this.grupoService.obtenerGrupos().subscribe(data => {
      this.grupos = data;
    });
  }

  crearGrupo() {
    if (!this.nombre.trim() || !this.tema.trim()) return;

    const nuevoGrupo = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      tema: this.tema,
      creador: "UsuarioX"
    };

    this.grupoService.crearGrupo(nuevoGrupo).subscribe(() => {
      this.nombre = "";
      this.descripcion = "";
      this.tema = "";
      this.cargarGrupos();
    });
  }
} 