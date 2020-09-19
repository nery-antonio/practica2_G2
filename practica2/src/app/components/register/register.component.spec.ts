import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { RegisterServiceService} from '../../services/register-service.service'
import { StorageService } from 'src/app/services/storage.service';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let service : RegisterServiceService;
  let storage_serv: StorageService;
  let fixture: ComponentFixture<RegisterComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();



    storage_serv = new StorageService();
    service = new RegisterServiceService(storage_serv);
    component = new RegisterComponent(service);
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validacion Registro correcto', ()=>{
    
      component.nombre= "user"
      component.pass="userpass"
      component.email="user@user.com"
    
    expect(component.registrar()).toBeInstanceOf(Object);

  })

  it('validacion Error Registro', ()=>{

    component.nombre= ""
    component.pass= ""
    component.email=""

    expect(component.registrar()).toBeNull();
  })

  it('debe llamarse a formato Correcto', ()=>{
    
    let fake_username = 'admin'

    expect(component.validarFormatoUsuario(fake_username)).toBeTrue();

  })

  it('debe validar Usuario NO existente',()=>{
     let fake_username = 'usernoexists'
     expect(component.validarExistenciaUsuario(fake_username)).toBeTrue(); 
  })

  it('debe validar Usuario existente',()=>{
    let fake_username = 'admin'
    expect(component.validarExistenciaUsuario(fake_username)).toBeFalse(); 
 })

  it('debe llamarse a validarContrasenia', ()=>{
    let pass_test = '12345678'
    expect(component.validarContrasenia(pass_test)).toBeTrue();

  })

  it('debe validar contrasenia con formato incorrecto', ()=>{
    let wrong_format_test = '123'
    expect(component.validarContrasenia(wrong_format_test)).toEqual(false);
  })

  it('debe validar username con formato incorrecto', ()=>{
    let wrong_format_usrname = '1301039j'
    expect(component.validarFormatoUsuario(wrong_format_usrname)).toBeFalse();
  })

  it('el metodo validarFormatoUsuario debe validar el formato', ()=>{

    let user_test = '1234565'
    expect(component.validarFormatoUsuario(user_test)).toBeFalse();
  
  })

  it('debe llamar putUser() ', ()=>{
    let metodollamada = spyOn(component, 'putUser')
    let user_obj;
    component.putUser(user_obj)
    expect(metodollamada).toHaveBeenCalled();
  })


});
