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
      console.log(this.inventario);

    }, error => {
      console.error('Error inventario report:', error);
    });
  }

  getUsuariosReporte(): void {
    this.reporteService.getUsuariosReporte().subscribe(data => {
      this.usuarios = data;
      console.log(this.usuarios);

    }, error => {
      console.error('Error usuarios report:', error);
    });
  }

  getComprasRealizadasReporte(): void {
    this.reporteService.getComprasRealizadasReporte().subscribe(data => {
      this.comprasRealizadas = data;
      console.log(this.comprasRealizadas);

    }, error => {
      console.error('Error compras realizadas report:', error);
    });
  }

  getPedidosRealizadosReporte(): void {
    this.reporteService.getPedidosRealizadosReporte().subscribe(data => {
      this.pedidosRealizados = data;
      console.log(this.pedidosRealizados);

    }, error => {
      console.error('Error  pedidos realizados report:', error);
    });
  }
}
