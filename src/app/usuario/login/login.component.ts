import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { CompartidoService } from '../../compartido/compartido.service';
import { Login } from '../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin!: FormGroup;
  ocultarPassword: boolean = true;
  mostrarLoading: boolean = false;
  hide = true;

  constructor(private fb: FormBuilder, private router: Router, private usuarioServicio: UsuarioService, private compartidoServicio: CompartidoService) {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  iniciarSesion(){
    this.mostrarLoading = true;
    const request: Login ={
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    };
    this.usuarioServicio.iniciarSesion(request).subscribe({
      next: (response) => {
        this.compartidoServicio.guardarSesion(response);
        this.router.navigate(['layout/dashboard']);
      },
      complete: () =>{
        this.mostrarLoading = false;
      },  
      error: (error) => {
        this.compartidoServicio.mostrarAlerta(error.error, 'Error');
        this.mostrarLoading = false;
      }
    });
  }
}
