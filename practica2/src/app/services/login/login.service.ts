import { Injectable } from '@angular/core';
import { bd } from 'src/app/models/Informacion';
import { User } from 'src/app/models/Users';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getUser(correo:string, password:string){

    for (let index = 0; index < bd.bdUsers.length; index++) {
      const elemento:User = bd.bdUsers[index];
      if(elemento.mail == correo){
        if(elemento.password == password){
          return elemento;
        }
      }
    }  
    return null;
  }
}


