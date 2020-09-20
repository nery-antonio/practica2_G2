import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdComponent } from './bd.component';

describe('BdComponent', () => {
  let component: BdComponent;
  let fixture: ComponentFixture<BdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('La lista que se recibe de base de datos no debe ser null', ()=>{
    expect(component.getUserfromback()).not.toBeNull();
  })

  it('No se puede eliminar un usuario de tipo administrador', ()=>{
    let correo_admin='admin@gmail.com'
    expect(component.deleteuser(correo_admin)).toBeFalse();
  })

  it('No se puede eliminar un usuario que no existe', ()=>{
    let correo_admin='usernews@gmail.com'
    expect(component.deleteuser(correo_admin)).toBeFalse();
  })

  it('Eliminado usuario no administrador', ()=>{
    let correo_admin='abner@gmail.com'
    expect(component.deleteuser(correo_admin)).toBeTrue();
  })

});
