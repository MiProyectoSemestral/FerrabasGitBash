import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/usuario/servicios/producto.service';
import { Producto } from '../../usuario/interfaces/Producto';
import { KeyValue } from '@angular/common';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/usuario/interfaces/Pedido';
import { DetallePedido } from 'src/app/usuario/interfaces/DetallePedido';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  selectedProducto: Producto | null = null;
  newProducto: Producto = { id: 0, nombre: '', precio: 0, stock: 0 };
  carrito: DetallePedido[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
      console.log(this.productos)
    }, error => {
      console.error('Error al obtener productos:', error);
    });
  }

  selectProducto(producto: Producto): void {
    this.selectedProducto = { ...producto };
  }

  createProducto(): void {
    this.productoService.createProducto(this.newProducto).subscribe(data => {
      this.productos.push(data);
      this.newProducto = { id: 0, nombre: '', precio: 0, stock: 0 };
    }, error => {
      console.error('Error creating producto:', error);
    });
  }

  updateProducto(): void {
    if (this.selectedProducto) {
      this.productoService.updateProducto(this.selectedProducto.id, this.selectedProducto).subscribe(() => {
        this.getProductos();
        this.selectedProducto = null;
      }, error => {
        console.error('Error updating producto:', error);
      });
    }
  }

  deleteProducto(id: number): void {
    this.productoService.deleteProducto(id).subscribe(() => {
      this.getProductos();
    }, error => {
      console.error('Error deleting producto:', error);
    });
  }
  agregarAlCarrito(producto: Producto, cantidad: number): void {
    const detalle: DetallePedido = {
      id: 0,
      pedidoId: 0,
      productoId: producto.id,
      producto: producto,
      cantidad,
      precio: producto.precio
    };
    this.carrito.push(detalle);
  }

  generarCompra(): void {
    this.productoService.generarCompra(this.carrito).subscribe(
      response => {
        console.log('Compra generada:', response);
        this.carrito = []; // Vaciar el carrito después de la compra
      },
      error => {
        console.error('Error al generar la compra:', error);
      }
    );

  
  }

  
}