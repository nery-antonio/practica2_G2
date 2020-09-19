import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CrearsuscripcionService } from 'src/app/services/crearsuscripcion/crearsuscripcion.service';
import { RegisterComponent } from '../register/register.component';

import { CrearsubscripcionComponent } from './crearsubscripcion.component';

describe('CrearsubscripcionComponent', () => {
  let component: CrearsubscripcionComponent;
  let fixture: ComponentFixture<CrearsubscripcionComponent>;
  let router:Router;
  let mockCrearSuscripcionService;

  const routes:Routes = [
    { path: 'register', component: RegisterComponent }
  ];

  beforeEach(async () => {
    localStorage.setItem("mail","admindos@gmail.com");
    /* Realizo los mocks con spy*/
    mockCrearSuscripcionService = jasmine.createSpyObj(['validarUsuarioAsAdmin','agregarSuscripcion','validarFormatoSuscripcion']);
    mockCrearSuscripcionService.validarUsuarioAsAdmin.and.returnValue(true);
    mockCrearSuscripcionService.agregarSuscripcion.and.returnValue(true);
    mockCrearSuscripcionService.validarFormatoSuscripcion.and.returnValue(true);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ CrearsubscripcionComponent ],
      providers: [{provide:CrearsuscripcionService, useValue: mockCrearSuscripcionService}]
    })
    .compileComponents();
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearsubscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(()=>{
    localStorage.removeItem("mail");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('si puedo estar en la pagina test',()=>{
    expect(component.siPuedoEstarAqui()).toBeTruthy();
    mockCrearSuscripcionService.validarUsuarioAsAdmin = jasmine.createSpy().and.returnValue(false);
    expect(component.siPuedoEstarAqui()).toBeFalsy();
  });

  it('capturar test', ()=>{
    component.capturar("Testeo");
    expect(component.tipoSeleccionado).toEqual("Testeo");
  });

  it('limpiar test', ()=>{
    component.limpiar();
    expect(component.descripcion).toEqual("");
    expect(component.nombreSuscripcion).toEqual("");
    expect(component.precio).toBe(null,'Se queda sin nada');
    expect(component.tipoSeleccionado).toBe(null,"Se queda sin nada");
    expect(component.mensajeError).toBe(null,"Se queda sin nada de nada");
  })

  it('validar formato correcto suscripcion test', ()=>{
    component.precio = 1;
    component.descripcion = "Descripcion";
    component.tipoSeleccionado = "Premium";
    component.nombreSuscripcion = "Suscripcion de prueba";
    expect(component.validarFormatoSuscripcion()).not.toBeNull();
    component.nombreSuscripcion = "";
    expect(component.validarFormatoSuscripcion()).toBeNull();
    component.nombreSuscripcion = "Suscripcion de prueba";
    component.precio = -50;
    expect(component.validarFormatoSuscripcion()).toBeNull();
    component.tipoSeleccionado = null;
    component.precio = 1;
    expect(component.validarFormatoSuscripcion()).toBeNull();
  })

  it('boton de crear test',() =>{
    component.precio = 1;
    component.descripcion = "Descripcion";
    component.tipoSeleccionado = "Premium";
    component.nombreSuscripcion = "Suscripcion de prueba";
    component.correoUsuario = "admindos@gmail.com";
    expect(component.crear()).toBeTrue();
    component.correoUsuario = "hola";
    mockCrearSuscripcionService.validarUsuarioAsAdmin = jasmine.createSpy().and.returnValue(false);
    expect(component.crear()).toBeFalse();
    mockCrearSuscripcionService.validarUsuarioAsAdmin = jasmine.createSpy().and.returnValue(true);
    component.correoUsuario = "admindos@gmail.com";
    component.precio = -10;
    expect(component.crear()).toBeFalse();
  })

});
