import { Producto } from './Producto';

export interface DetallePedido {
  id: number;
  pedidoId: number;
  productoId: number;
  producto: Producto;
  cantidad: number;
  precio: number;
}
