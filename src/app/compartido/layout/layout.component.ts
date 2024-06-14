import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CompartidoService } from '../compartido.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  email: string = '';

  constructor (private router : Router, private compartidoService: CompartidoService)
  {

  }
  ngOnInit(): void {
    const emailToken = this.compartidoService.obtenerSesion();
    if (emailToken!=null)
      {
        this.email = emailToken.email;
      }
  }

  cerrarSesion() {
    this.compartidoService.eliminarSesion();
    this.router.navigate(['login']);
  }

}
