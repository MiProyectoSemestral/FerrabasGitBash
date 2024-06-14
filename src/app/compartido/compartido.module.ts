import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { ProductoComponent } from './producto/producto.component';
import { CompraComponent } from './compra/compra.component';
import { InventarioComponent } from './inventario/inventario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PagoComponent } from './pago/pago.component';
import { ReporteComponent } from './reporte/reporte.component';
import { SobremiComponent } from './sobremi/sobremi.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    ProductoComponent,
    CompraComponent,
    InventarioComponent,
    CrearUsuarioComponent,
    ContactoComponent,
    PagoComponent,
    ReporteComponent,
    SobremiComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutComponent,
    DashboardComponent,
    MaterialModule
  ]
})
export class CompartidoModule { }
