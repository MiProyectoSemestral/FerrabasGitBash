import { DetallePedido } from './DetallePedido';
import { Pago } from './Pago';

export interface Pedido {
  id: number;
  usuarioId: number;
  fecha: Date;
  detallePedidos: DetallePedido[];
  pago: Pago;
}
