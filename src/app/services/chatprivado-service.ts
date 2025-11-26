import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatPrivadoService {

  private apiUrl = 'http://localhost:3000/chat'; // Ruta de tu API

  constructor(private http: HttpClient) {}

  crearChat(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  obtenerChats(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  obtenerChatPorId(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  agregarMensaje(id: string, mensaje: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/mensaje`, mensaje);
  }

  eliminarChat(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
} 