import { Injectable } from '@angular/core';
import {User} from '../../models/Users';
import {bd} from '../../models/Informacion';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }

  setItem(usuario):any{
    bd.bdUsers.push(usuario);
    return bd.bdUsers;
  }

  validateItem(usuario:string):boolean{
    for (let index = 0; index < bd.bdUsers.length; index++) {
      const element:User = bd.bdUsers[index];
      if(!usuario.localeCompare(element.name.toString())){
        return false;
      }
    }
    return true;
  }
}
