import { TestBed } from '@angular/core/testing';

import { MostrarusuariosService } from './mostrarusuarios.service';
import { bd } from 'src/app/models/Informacion';

describe('MostrarusuariosService', () => {
  let service: MostrarusuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarusuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Verifica que el tipo sea Admin', ()=>{
    let tipo_user='Admin';
    expect(service.isAdmin(tipo_user)).toBeTrue();
  });

  it('Verifica que el tipo es de otro tipo', ()=>{
    let tipo_user='Normal';
    expect(service.isAdmin(tipo_user)).toBeFalse();
  });

  it('Tiene que exister al menos un usuario administrador', ()=>{
    expect(service.existoneadmin(bd.bdUsers)).toBeTrue();
  });

  it('Tiene que exister al menos un usuario administrador', ()=>{
    expect(service.isemptybase(bd.bdUsers)).not.toBeTrue();
  });

  it('Tiene que exister al menos un usuario administrador', ()=>{
    expect(service.existoneadmin([])).toBe(false,'No existe usuario alguno');;
  });

  it('No tiene que haber  un usuario administrador', ()=>{
    expect(service.isemptybase([])).toBe(true,'No existe un admin');
  });
  it('debe estar vacia la base de datos', ()=>{
    let varAux = bd.bdUsers;
    bd.bdUsers = [];
    expect(service.getUser()).toBeNull();
    bd.bdUsers= varAux;
  });
});
