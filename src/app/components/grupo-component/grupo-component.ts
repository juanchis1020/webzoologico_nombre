import { Component } from '@angular/core';
import { GruposService } from '../../services/grupo-service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos-component.html',
  styleUrls: ['./grupos-component.css']
})
export class GruposComponent {

  grupos: any[] = [];
  nombre = "";
  descripcion = "";
  tema = "";
  creador = "UsuarioX";

  constructor(private gruposService: GruposService) {}

  ngOnInit(): void {
    this.cargarGrupos();
  }

  cargarGrupos() {
    this.gruposService.obtenerGrupos().subscribe(data => {
      this.grupos = data;
    });
  }

  crearGrupo() {
    const nuevo = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      tema: this.tema,
      creador: this.creador
    };

    this.gruposService.crearGrupo(nuevo).subscribe(() => {
      this.cargarGrupos();
      this.nombre = "";
      this.descripcion = "";
      this.tema = "";
    });
  }
} 