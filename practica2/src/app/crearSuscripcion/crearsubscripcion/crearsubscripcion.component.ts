import { Component, OnInit } from '@angular/core';
import {tiposSuscripcion} from '../../tipos/suscripciones';

@Component({
  selector: 'app-crearsubscripcion',
  templateUrl: './crearsubscripcion.component.html',
  styleUrls: ['./crearsubscripcion.component.css']
})
export class CrearsubscripcionComponent implements OnInit {
  tipoSuscripcion:String[];

  correoUsuario:String;

  nombreSuscripcion:String = "";
  descripcion:String = "";
  precio:Number;
  tipoSeleccionado:String = null;
  constructor() { 
    this.tipoSuscripcion = tiposSuscripcion;
  }

  ngOnInit(): void {
  }

  limpiar():void{
    this.nombreSuscripcion = "";
    this.descripcion = "";
    this.precio = null;
    this.tipoSeleccionado = null; 
  }

  capturar(tipoSeleccionado):void{
    this.tipoSeleccionado = tipoSeleccionado;
  }

  crear(){
    
  }

  suma(num1,num2:number):Number{
    return num1+num2;
  }
}
