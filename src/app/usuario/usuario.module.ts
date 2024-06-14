import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from '../compartido/compartido.module';
import { UsuarioService } from './servicios/usuario.service';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { CompraService } from './servicios/compra.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from './servicios/producto.service';
import { ReporteService } from './servicios/reporte.service';




@NgModule({
  declarations: [
    LoginComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CompartidoModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  exports: [
    LoginComponent,
    
  ],
  providers: [
    UsuarioService,
    CompraService,
    ProductoService,
    ReporteService
  ]

})
export class UsuarioModule { }
