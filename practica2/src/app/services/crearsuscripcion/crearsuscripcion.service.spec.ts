import { TestBed } from '@angular/core/testing';
import { User } from '../../models/Users';

import { CrearsuscripcionService } from './crearsuscripcion.service';

class MockBD{
  public static bdUsers:User[] = [{
    tipo:"Admin",
    name:"Brian",
    mail:"otraprueba@sinsuscripcion.com",
    password:"12345678",
    suscripcion_creada:[]
  },
  {
    tipo:"Admin",
    name:"Tomo",
    mail:"prueba@consuscripcion.com",
    password:"12345678",
    suscripcion_creada:[{
      "nombre":"Suscripcion",
      "descripcion":"Este usuario tiene una suscripcion",
      "precio":0,
      "tipo":"Premium",
      "suscritos":["prueba@prueba.com"]
    }]
  },
  {
    tipo:"Normal",
    name:"Daniel",
    mail:"prueba@prueba.com",
    password:"12345678",
    suscripcion_creada:[]
  }];
}

describe('CrearsuscripcionService', () => {
  let service: CrearsuscripcionService;

  beforeEach(() => {
    //TestBed.configureTestingModule({});
    //service = TestBed.inject(CrearsuscripcionService);
    service = new CrearsuscripcionService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('validar si usuario es admin test', () =>{
    expect(service.validarUsuarioAsAdmin("admin@gmail.com")).toBe(true,'Existe el usuario y es admin');
  });

  it('validar si usuario no es admin test', () =>{
    expect(service.validarUsuarioAsAdmin("abner@gmail.com")).toBe(false,'No existe o no es admin');
  });

  it('validar si existe nombre suscripcion test', () =>{
    expect(service.obtenerSuscripcion("Uno que no existe")).toBeNull();
    expect(service.obtenerSuscripcion("Amazon prime")).not.toBeNull();
  });

  it('agregar suscripcion valida test', () => {
    expect(service.agregarSuscripcion("admin@gmail.com",{
      "nombre":"Nueva suscripcion",
      "descripcion":"Este es una suscripcion de prueba",
      "precio":0,
      "tipo":"Premium",
      "suscritos":[]
    })).toBeTruthy();
    expect(service.obtenerSuscripcion("Nueva suscripcion")).not.toBeNull();
  });

  it('agregar suscripcion invalida test', () =>{
    expect(service.agregarSuscripcion("abner@gmail.com",{
      "nombre":"Otro mas",
      "descripcion":"Esta es otra suscripcion de prueba",
      "precio":0,
      "tipo":"Premium",
      "suscritos":[]
    })).toBe(false,"Aqui no deberia guardar la info porque no existe el usuario o no es admin");
    expect(service.obtenerSuscripcion("Otro mas")).toBeNull();
  });

});
