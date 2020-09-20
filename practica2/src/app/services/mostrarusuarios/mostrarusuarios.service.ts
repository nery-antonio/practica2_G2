import { Injectable } from '@angular/core';
import { bd } from 'src/app/models/Informacion';


@Injectable({
  providedIn: 'root'
})
export class MostrarusuariosService {

  constructor() { }

  public getUser(){
    if (bd.bdUsers!=null)
      return bd.bdUsers;
    else return null;
  }

  public deleteuser(correo:String):boolean{
    for (let index = 0; index < bd.bdUsers.length; index++) {
      const user = bd.bdUsers[index];
      if(correo === user.mail && this.isAdmin(user.tipo))
      {
        bd.bdUsers.splice( index, 1 );
        return true
      }
    }
    return false;
  }
  public isAdmin(tipo:String):boolean{
    if (tipo==='Admin')
      return false;
    return true;
  }

  public existoneadmin():number{
    let contador=0;
    for(let user of bd.bdUsers){
      if(this.isAdmin(user.tipo))
        contador++;
    }
    return contador;
  }

  public isemptybase(){
    let elementos=bd.bdUsers.length
    if(elementos!=-1 && this.existoneadmin())
      return false;
    else return true;
  }
    
}
