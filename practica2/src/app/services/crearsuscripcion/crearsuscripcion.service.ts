import { Injectable } from '@angular/core';
import { bd } from 'src/app/models/Informacion';
import { Suscripcion } from 'src/app/models/Suscripcion';
import { User } from 'src/app/models/Users';

@Injectable({
  providedIn: 'root'
})
export class CrearsuscripcionService {

  constructor() {
  }

  public validarUsuarioAsAdmin(correo:String):boolean{
    for(let user of bd.bdUsers){
      if(correo === user.mail && user.tipo === "Admin")
        return true;
    }
    return false;
  }

  public obtenerSuscripcion(nameSuscripcion:String):Suscripcion{
    for(let user of bd.bdUsers){
      for(let suscripcion of user.suscripcion_creada){
        if(suscripcion.nombre === nameSuscripcion)
          return suscripcion;
      }
    }
    return null;
  }

  public agregarSuscripcion(correo:String,suscripcion:Suscripcion):boolean{
    for(let user of bd.bdUsers){
      if(user.mail === correo && user.tipo === "Admin"){
        user.suscripcion_creada.push(suscripcion);
        return true;
      }
    }
    return false;
  }
}
