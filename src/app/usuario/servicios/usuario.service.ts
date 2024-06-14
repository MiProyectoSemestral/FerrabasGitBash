import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Observable, map } from 'rxjs';
import { Sesion } from '../interfaces/sesion';
import { Usuario } from '../interfaces/Usuario';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:5162/api/Usuario/'; // Asegúrate de que esta URL es correcta

  constructor(private http: HttpClient) {}
  iniciarSesion(request: Login): Observable<Sesion>{
    return  this.http.post<Sesion>(`${this.baseUrl}login`,request);
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<any>(this.baseUrl).pipe(
      map(response => response.$values)
    );
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}${id}`);
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}registro`, usuario);
  }

  updateUsuario(id: number, usuario: Usuario): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}${id}`, usuario);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`);
  }
}




 
