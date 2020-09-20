import { Component, OnInit } from '@angular/core';
import {tiposSuscripcion} from '../../tipos/suscripciones';
import {bd} from '../../models/Informacion'
import {CrearsuscripcionService} from '../../services/crearsuscripcion/crearsuscripcion.service';
import { Suscripcion } from 'src/app/models/Suscripcion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearsubscripcion',
  templateUrl: './crearsubscripcion.component.html',
  styleUrls: ['./crearsubscripcion.component.css']
})
export class CrearsubscripcionComponent implements OnInit {
  tipoSuscripcion:String[];

  nombreSuscripcion:String = "";
  descripcion:String = "";
  precio:Number;
  tipoSeleccionado:String = null;
  
  mensajeError:String = null;

  constructor(private service:CrearsuscripcionService, private router:Router) { 
    this.siPuedoEstarAqui();
    this.tipoSuscripcion = tiposSuscripcion;
  }

  siPuedoEstarAqui():boolean{
    if(!this.service.validarUsuarioAsAdmin(localStorage.getItem("mail"))){
      this.router.navigate(['/register']);
      return false;
    }
    return true;
  }

  ngOnInit(): void {
  }

  limpiar():void{
    this.nombreSuscripcion = "";
    this.descripcion = "";
    this.precio = null;
    this.tipoSeleccionado = null;
    this.mensajeError = null; 
  }

  capturar(tipoSeleccionado):void{
    this.tipoSeleccionado = tipoSeleccionado;
  }

  validarFormatoSuscripcion():Suscripcion{
    let suscripcion:Suscripcion = {
      tipo:this.tipoSeleccionado,
      nombre:this.nombreSuscripcion,
      descripcion:this.descripcion,
      precio:this.precio,
      suscritos:[]
    }
    if(suscripcion.nombre == "")
      this.mensajeError = "Falta colocar un nombre a la suscripcion";
    else if(suscripcion.precio < 0 || suscripcion.precio == null)
      this.mensajeError = "El precio no debe ser menor a 1";
    else if(suscripcion.tipo == null)
      this.mensajeError = "Debe seleccionar un tipo de suscripcion valido";
    else
      return suscripcion;
    return null;
  }

  crear():boolean{
    if(this.service.validarUsuarioAsAdmin(localStorage.getItem("mail"))){
      let suscripcion:Suscripcion = this.validarFormatoSuscripcion();
      if(suscripcion){
        this.mensajeError = "No fue posible agregar suscripcion";
        return this.service.agregarSuscripcion(localStorage.getItem("mail"),suscripcion);
      }
    }else
      this.mensajeError = "El usuario no es admin no se como estas aqui";
    return false;
  }

  botonCrear(siCreado:boolean){
    console.log(bd.bdUsers);
    if(siCreado)
      this.mensajeError = "Se crea correctamente la suscripcion aqui deberia redirigir";
  }
}
