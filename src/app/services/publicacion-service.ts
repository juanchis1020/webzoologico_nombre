import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Publicacion {
  _id?: string;
  titulo: string;
  contenido: string;
  autor: string;
  imagen?: string;
  documento?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  private apiUrl = '/api/publicacion';

  constructor(private http: HttpClient) {}

  // Obtener todas las publicaciones
  getPublicaciones(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(this.apiUrl);
  }

  // Crear publicación
  crearPublicacion(data: Publicacion): Observable<Publicacion> {
    return this.http.post<Publicacion>(this.apiUrl, data);
  }

  // Actualizar publicación
  actualizarPublicacion(id: string, data: Publicacion): Observable<any> {
    return this.http.put(`${this.apiUrl}/id?id=${id}`, data);
  }

  // Eliminar publicación
  eliminarPublicacion(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/id?id=${id}`);
  }
}

