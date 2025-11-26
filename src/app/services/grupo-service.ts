import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  private apiUrl = 'http://localhost:3000/grupos';

  constructor(private http: HttpClient) {}

  crearGrupo(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  obtenerGrupos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  obtenerGrupoPorId(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  actualizarGrupo(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  eliminarGrupo(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
} 