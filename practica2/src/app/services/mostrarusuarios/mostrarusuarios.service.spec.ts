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
    expect(service.existoneadmin([])).toBeFalse();
  });

  it('No tiene que haber  un usuario administrador', ()=>{
    expect(service.isemptybase([])).toBeTrue();
  });

  it('No se puede eliminar un usuario de tipo administrador', ()=>{
    let correo_admin='admin@gmail.com'
    expect(service.deleteuser(correo_admin)).toBeFalse();
  })

  it('Eliminado usuario no administrador', ()=>{
    let correo_admin='abner@gmail.com'
    expect(service.deleteuser(correo_admin)).toBeFalse();
  })
});
