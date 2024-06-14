import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ReporteService } from 'src/app/usuario/servicios/reporte.service';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  inventario: any[] = [];
  usuarios: any[] = [];
  comprasRealizadas: any[] = [];
  pedidosRealizados: any[] = [];

  constructor(private reporteService: ReporteService) {}

  ngOnInit(): void {
    this.getInventarioReporte();
    this.getUsuariosReporte();
    this.getComprasRealizadasReporte();
    this.getPedidosRealizadosReporte();
  }

  getInventarioReporte(): void {
    this.reporteService.getInventarioReporte().subscribe(data => {
      this.inventario = data;
    }, error => {
      console.error('Error fetching inventario report:', error);
    });
  }

  getUsuariosReporte(): void {
    this.reporteService.getUsuariosReporte().subscribe(data => {
      this.usuarios = data;
    }, error => {
      console.error('Error fetching usuarios report:', error);
    });
  }

  getComprasRealizadasReporte(): void {
    this.reporteService.getComprasRealizadasReporte().subscribe(data => {
      this.comprasRealizadas = data;
    }, error => {
      console.error('Error fetching compras realizadas report:', error);
    });
  }

  getPedidosRealizadosReporte(): void {
    this.reporteService.getPedidosRealizadosReporte().subscribe(data => {
      this.pedidosRealizados = data;
    }, error => {
      console.error('Error fetching pedidos realizados report:', error);
    });
  }
}
