import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '..//interfaces/Producto';
import { Pedido } from '../interfaces/Pedido';
import { DetallePedido } from '../interfaces/DetallePedido';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl = 'http://localhost:5162/api/Productos'; // Asegúrate de que esta URL es correcta

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<any>(this.baseUrl).pipe(
      map(response => response.$values)
    ); 
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseUrl}/${id}`);
  }

  createProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.baseUrl}`, producto);
  }

  updateProducto(id: number, producto: Producto): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, producto);
  }

  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  addPedidoToDetalleProducto(productId: number, cantidad: number): Observable<DetallePedido> {
    const detalle = { productId, cantidad };
    return this.http.post<DetallePedido>(`${this.baseUrl}/${productId}/detalles`, detalle);
  }

  generarCompra(detalles: DetallePedido[]): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/compras`, detalles);
  }
  
}
