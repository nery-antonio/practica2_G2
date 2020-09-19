import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from 'src/app/services/register-service.service';

import db_users from '../../../assets/JSON/Users.json'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre:any;
  pass:string;
  email:string;

  constructor(private register:RegisterServiceService) { }

  ngOnInit(): void {
  }

  validarExistenciaUsuario(usrname:string):boolean{
    if(this.register.existe(usrname)){
      return true;
    }else{
      return false;
    }
  }

  validarFormatoUsuario(usrname:string):boolean{
    if(/[a-zA-Z][A-Za-z0-9]+/.test(usrname)){
      return true;
    }else{
      return false;
    }
  }

  validarContrasenia(pass:string):boolean{
    if(pass.length >= 8){
      return true;
    }else{
      return false;
    }
  }


  registrar(){

    if(this.validarFormatoUsuario(this.nombre)
    && this.validarContrasenia(this.pass)
    && this.validarExistenciaUsuario(this.nombre)){
      let nuevo_usuario = {
        name:this.nombre,
        pass:this.pass,
        email:this.email
      }

      this.putUser(nuevo_usuario);

      return nuevo_usuario;

    }else{
      alert("formato no valido");
      return null;
    }
  }

  putUser(nuevo_usuario){

        console.log(this.register.signup(nuevo_usuario));
  }

}
