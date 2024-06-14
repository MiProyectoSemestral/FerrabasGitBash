import { Component, OnInit } from '@angular/core';
import { Inventario } from 'src/app/usuario/interfaces/Inventario';
import { InventarioService } from 'src/app/usuario/servicios/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit{
  inventarios: Inventario[] = [];
  selectedInventario: Inventario | null = null;
  newInventario: Inventario = { id: 0, ProductoId: 0, Stock: 0 };
  formProductoId: number = 0;
  formStock: number = 0;

  constructor(private inventarioService: InventarioService) {}

  ngOnInit(): void {
    this.getInventarios();
  }

  getInventarios(): void {
    this.inventarioService.getInventarios().subscribe(data => {
      this.inventarios = data;
    }, error => {
      console.error('Error al obtener inventarios:', error);
    });
  }

  selectInventario(inventario: Inventario): void {
    this.selectedInventario = { ...inventario };
    this.formProductoId = inventario.ProductoId;
    this.formStock = inventario.Stock;
  }

  createInventario(): void {
    this.inventarioService.createInventario(this.newInventario).subscribe(data => {
      this.inventarios.push(data);
      this.newInventario = { id: 0, ProductoId: 0, Stock: 0 };
    }, error => {
      console.error('Error creando inventario:', error);
    });
  }

  updateInventario(): void {
    if (this.selectedInventario) {
      this.selectedInventario.ProductoId = this.formProductoId;
      this.selectedInventario.Stock = this.formStock;
      this.inventarioService.updateInventario(this.selectedInventario.id, this.selectedInventario).subscribe(() => {
        this.getInventarios();
        this.selectedInventario = null;
        this.formProductoId = 0;
        this.formStock = 0;
      }, error => {
        console.error('Error actualizando inventario:', error);
      });
    }
  }

  deleteInventario(id: number): void {
    this.inventarioService.deleteInventario(id).subscribe(() => {
      this.getInventarios();
    }, error => {
      console.error('Error eliminando inventario:', error);
    });
  }

  clearSelection(): void {
    this.selectedInventario = null;
    this.newInventario = { id: 0, ProductoId: 0, Stock: 0 };
    this.formProductoId = 0;
    this.formStock = 0;
  }
}