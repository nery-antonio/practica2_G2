import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import db_users from '../../assets/JSON/Users.json'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(usuario):any{
    db_users.push(usuario);
    return db_users;
  }

  validateItem(usuario:string):boolean{
    for (let index = 0; index < db_users.length; index++) {
      const element = db_users[index];
      if(!usuario.localeCompare(element.name)){
        return false;
      }
    }
    

    return true;
  }
}
