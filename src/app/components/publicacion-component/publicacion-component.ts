import { Component } from '@angular/core';
import { PublicacionService, Publicacion } from '../../services/publicacion-service';

// Necesarios para *ngIf, *ngFor y ngModel
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-publicacion-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './publicacion-component.html',
  styleUrls: ['./publicacion-component.css']
})
export class PublicacionComponent {

  publicaciones: Publicacion[] = [];
  editMode = false;

  formData: Publicacion = {
    titulo: '',
    contenido: '',
    autor: '',
    imagen: '',
    documento: ''
  };

  editingId: string | null = null;

  constructor(private publicacionService: PublicacionService) {}

  ngOnInit(): void {
    this.cargarPublicaciones();
  }

  cargarPublicaciones() {
    this.publicacionService.getPublicaciones().subscribe(res => {
      this.publicaciones = res;
    });
  }

  crearPublicacion() {
    console.log("BOTÓN FUNCIONA, ENVIANDO:", this.formData);
    this.publicacionService.crearPublicacion(this.formData).subscribe(() => {
      alert('Publicación creada correctamente');
      this.resetForm();
      this.cargarPublicaciones();
    });
  }

  habilitarEdicion(pub: Publicacion) {
    this.editMode = true;
    this.editingId = pub._id ?? null;
    this.formData = { ...pub };
  }

  actualizarPublicacion() {
    if (!this.editingId) return;

    this.publicacionService.actualizarPublicacion(this.editingId, this.formData)
      .subscribe(() => {
        alert('Publicación actualizada');
        this.resetForm();
        this.cargarPublicaciones();
      });
  }

  eliminarPublicacion(id: string) {
    if (!confirm('¿Eliminar esta publicación?')) return;

    this.publicacionService.eliminarPublicacion(id).subscribe(() => {
      this.cargarPublicaciones();
    });
  }

  resetForm() {
    this.editMode = false;
    this.editingId = null;
    this.formData = {
      titulo: '',
      contenido: '',
      autor: '',
      imagen: '',
      documento: ''
    };
  }
}
