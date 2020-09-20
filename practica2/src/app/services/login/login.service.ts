import { Injectable } from '@angular/core';
import { bd } from 'src/app/models/Informacion';
import { User } from 'src/app/models/Users';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getUser(correo:string, password:string){
    console.log('Tabla----------------------------->');
    console.table(bd.bdUsers);
    for (let index = 0; index < bd.bdUsers.length; index++) {
      const elemento:User = bd.bdUsers[index];
      console.log(1);
      console.table(elemento);
      if(elemento.mail == correo){
        console.log(2);
        console.table(elemento);
        if(elemento.password == password){
          console.log(3);
          console.table(elemento);
          return elemento;
        }
      }
    }  
    return null;
  }
}


