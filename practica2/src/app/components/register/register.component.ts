import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../../services/register/register-service.service';
import {User} from '../../models/Users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre: any;
  pass: string;
  email: string;

  constructor(public register: RegisterServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  validarExistenciaUsuario(usrname: string): boolean {
    if (this.register.existe(usrname)) {
      return true;
    } else {
      return false;
    }
  }

  validarFormatoUsuario(usrname: string): boolean {
    if (/[a-zA-Z][A-Za-z0-9]+/.test(usrname)) {
      return true;
    } else {
      return false;
    }
  }

  validarContrasenia(pass: string): boolean {
    if (pass.length >= 8) {
      return true;
    } else {
      return false;
    }
  }


  registrar() {

    if(this.validarFormatoUsuario(this.nombre)
    && this.validarContrasenia(this.pass)
    && this.validarExistenciaUsuario(this.nombre)){
      let nuevo_usuario:User = {
        tipo:"Basico",
        name:this.nombre,
        password:this.pass,
        mail:this.email,
        suscripcion_creada:[]
      }

      this.putUser(nuevo_usuario);
      return nuevo_usuario;

    } else {
      alert("formato no valido");
      return null;
    }
  }
  irIniciarSesion() {
    this.router.navigate(['/login']);
  }
  putUser(nuevo_usuario) {

    console.log(this.register.signup(nuevo_usuario));
  }

}
