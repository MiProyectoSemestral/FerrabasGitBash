import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompraComponent } from './compra/compra.component';
import { ProductoComponent } from './producto/producto.component';
import { HttpClient } from '@angular/common/http';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PagoComponent } from './pago/pago.component';
import { ReporteComponent } from './reporte/reporte.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
      { path: 'compras', component: CompraComponent },
      { path: 'productos', component: ProductoComponent },
      { path: 'crearUsuario', component: CrearUsuarioComponent },

      { path: 'inventario', component: InventarioComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'pago', component: PagoComponent },
      { path: 'reporte', component: ReporteComponent },

      { path: 'sobremi', component: SobremiComponent },


      {path: "**", redirectTo: '', pathMatch:'full'}
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    RouterModule,
    
    
  ]
})
export class LayoutRoutingModule { }
