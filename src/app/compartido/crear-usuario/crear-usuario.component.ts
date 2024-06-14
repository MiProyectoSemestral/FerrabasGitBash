import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario/servicios/usuario.service';
import { Usuario } from '../../usuario/interfaces/Usuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  selectedUsuario: Usuario | null = null;
  newUsuario: Usuario = { id: 0, email: '', password: '' }; // Maneja la contraseña como texto plano

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      data => {
        this.usuarios = data;
        console.log(this.usuarios);
      },
      error => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }

  selectUsuario(usuario: Usuario): void {
    this.selectedUsuario = { ...usuario, password: '' }; // No manejamos el hash en el frontend
  }
 

  createUsuario(): void {
    this.usuarioService.createUsuario(this.newUsuario).subscribe(
      data => {
        this.usuarios.push(data);
        this.newUsuario = { id: 0, email: '', password: '' };
      },
      error => {
        console.error('Error al crear el usuario', error);
      });
  }

  updateUsuario(): void {
    if (this.selectedUsuario) {
      this.usuarioService.updateUsuario(this.selectedUsuario.id, this.selectedUsuario).subscribe(
        () => {
          this.getUsuarios();
          this.selectedUsuario = null;
        },
        error => {
          console.error('Error al actualizar el usuario', error);
        }
      );
    }
  }

  deleteUsuario(id: number): void {
    this.usuarioService.deleteUsuario(id).subscribe(
      () => {
        this.getUsuarios();
      },
      error => {
        console.error('Error al eliminar el usuario', error);
      }
    );
  }
}
