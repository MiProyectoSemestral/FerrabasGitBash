import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private baseUrl = 'http://localhost:5162/api/Reportes'; // Asegúrate de que esta URL es correcta

  constructor(private http: HttpClient) {}

  getInventarioReporte(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/Inventario`).pipe(
      map(response => response.$values)
    );
  }

  getUsuariosReporte(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/Usuarios`).pipe(
      map(response => response.$values)
    );
  }

  getComprasRealizadasReporte(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/ComprasRealizadas`).pipe(
      map(response => response.$values)
    );
  }

  getPedidosRealizadosReporte(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/PedidosRealizados`).pipe(
      map(response => response.$values)
    );
  }
}
