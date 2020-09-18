import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre:any;
  pass:string;
  email:string;

  constructor() { }

  ngOnInit(): void {
  }

  validarFormatoUsuario(usrname):boolean{
    if(/([a-z][A-Za-z0-9])\w*/g.test(usrname)){
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

  validarFormatoCorreo(email):boolean{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
      return true;
     } else {
      return false;
     }
  }


  registrar(){

    let nuevo_usuario = {
      name:this.nombre,
      pass:this.pass,
      email:this.email
    }

    
  }

}
