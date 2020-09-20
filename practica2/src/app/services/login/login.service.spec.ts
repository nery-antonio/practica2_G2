import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('prueba del servicio', () => {
    expect(service.getUser('abner@gmail.com', 'abner')).not.toBeNull();
  });

  it('prueba de falla servicio', () => {
    expect(service.getUser('abner@gmail.com', 'malUsuario')).toEqual(null);
  });

});
