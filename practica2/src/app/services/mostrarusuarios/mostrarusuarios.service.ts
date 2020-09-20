import { Injectable } from '@angular/core';
import { bd } from 'src/app/models/Informacion';


@Injectable({
  providedIn: 'root'
})
export class MostrarusuariosService {

  constructor() { }
//5
  public getUser(){
    if (!this.isemptybase(bd.bdUsers))
      return bd.bdUsers;
    else return null;
  }
//4
  public deleteuser(correo:String):boolean{
    for (let index = 0; index < bd.bdUsers.length; index++) {
      const user = bd.bdUsers[index];
      if(correo === user.mail && !this.isAdmin(user.tipo))
      {
        bd.bdUsers.splice( index, 1 );
        return true
      }
    }
    return false;
  }
  //3
  public isAdmin(tipo:String):boolean{
    if (tipo==='Admin')
      return true;
    return false;
  }
//1
  public existoneadmin(bds):boolean{
    let contador=0;
    for(let user of bds){
      if(this.isAdmin(user.tipo))
        contador++;
    }
    if (contador>0)
      return true;
    else return false;
  }
//2
  public isemptybase(bds){
    let elementos=bds.length
    if(elementos!=-1 && this.existoneadmin(bds))
      return false;
    else return true;
  }
    
}
