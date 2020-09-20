import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from './login.component';
import { Location } from '@angular/common';
import { componentFactoryName } from '@angular/compiler';
import { throwError } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';


describe('LoginComponent', () => {
  
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router:Router;
  let location:Location;
  let loginService:LoginService;

  const routes: Routes = [
    { path: 'register', component: RegisterComponent }
  ];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[RouterTestingModule.withRoutes(routes)],
      providers:[LoginService]
    })
    .compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    loginService = new LoginService();
    component =new LoginComponent(router,loginService);
    router.initialNavigation();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('deberia navegar de login a register', fakeAsync(() => {
    //router.navigate(['/register']);
    component.irRegistrarse();
    tick(50);
    expect(location.path()).toBe('/register');
  }));

  it('deberia tener las credenciales incorrectas ', () => {
    expect(component.comprobarCampos('','')).toBeFalsy();
    expect(component.comprobarCampos('email@gmail.com','')).toBeFalsy();
    expect(component.comprobarCampos('','soyContrasenia')).toBeFalsy();
  });

  it('deberia tener las credenciales correctas', () => {
    expect(component.comprobarCampos('email@gmail.com','soyContrasenia')).toBeTruthy();
  });

  it('deberia tener el formato del email correcto', () => {
    expect(component.comprobarEmail('email@gmail.com')).toEqual(1);
    expect(component.comprobarEmail('email@mail.com')).toEqual(1);
    expect(component.comprobarEmail('email@hotmail.com')).toEqual(1);
  });

  it('deberia no tener el formato del email correcto', () => {
    expect(component.comprobarEmail('email@hola.com')).toBeUndefined();
  });

  it('deberia validar usuario y contrasenia con la bd', () => {
    component.email = 'abner@gmail.com';
    component.password = 'abner';
    expect(component.iniciarSesion()).toMatch('Buen');
  });

  it('no deberia validar usuario y contrasenia con la bd', () => {
    component.email = 'abner@gmai.com';
    component.password = 'abner';
    expect(component.iniciarSesion()).toMatch('Mal'); 
  });

  it('deberia validar que se inicieSesion', () => {
    spyOn(component.loginService, 'getUser').and.returnValue({ 
      "tipo":"Normal",
      "name":"abner", 
      "password":"abner", 
      "mail":"abner@gmail.com",
      "suscripcion_creada":[
      ]
  });
    component.email = 'abner@gmai.com';
    component.password = 'abner';
    expect(component.iniciarSesion()).toBeTruthy;
  });

  it('deberia validar que no se inicieSesion', () => {
    spyOn(component.loginService, 'getUser').and.returnValue(null);
    component.email = 'abner@gmai.com';
    component.password = 'hola';
    expect(component.iniciarSesion()).toMatch('Mal');
    component.email = '';
    expect(component.iniciarSesion()).toMatch('Mal');
  });

  it('deberia validar tipo de usuario admin', () => {
    spyOn(component.loginService, 'getUser').and.returnValue({ 
      "tipo":"Admin",
      "name":"abner", 
      "password":"abner", 
      "mail":"abner@gmail.com",
      "suscripcion_creada":[
      ]
  });
    component.email = 'abner@gmail.com';
    component.password = 'abner';
    expect(component.iniciarSesion()).toMatch('Buen');
    
  });

  it('deberia validar tipo de usuario normal', () => {
    spyOn(component.loginService, 'getUser').and.returnValue({ 
      "tipo":"Normal",
      "name":"abner", 
      "password":"abner", 
      "mail":"abner@gmail.com",
      "suscripcion_creada":[
      ]
  });
    component.email = 'abner@gmail.com';
    component.password = 'abner';
    expect(component.iniciarSesion()).toMatch('Buen');
  });

  it('deberia validar que no se encontro el usuario', () => {
    spyOn(component.loginService, 'getUser').and.returnValue(null);
    component.email = 'abner@gmail.com';
    component.password = 'abner';
    expect(component.iniciarSesion()).toMatch('Mal');
  });
});
