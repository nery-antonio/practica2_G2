import {Suscripcion} from './Suscripcion';

export interface User{
    "tipo":String, 
     "name":String, 
     "password":String, 
     "mail":String,
     "suscripcion_creada":Suscripcion[]
}