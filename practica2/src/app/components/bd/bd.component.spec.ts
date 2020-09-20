import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdComponent } from './bd.component';
import { MostrarusuariosService } from '../../services/mostrarusuarios/mostrarusuarios.service';

describe('BdComponent', () => {
  let component: BdComponent;
  let fixture: ComponentFixture<BdComponent>;
  let mockdbservices;

  beforeEach(async () => {
    mockdbservices = jasmine.createSpyObj(['getUser','deleteuser','isAdmin','existoneadmin','isemptybase']);
    mockdbservices.getUser.and.returnValue([]);
    mockdbservices.deleteuser.and.returnValue(true);
    mockdbservices.isAdmin.and.returnValue(true);
    mockdbservices.existoneadmin.and.returnValue(true);
    mockdbservices.isemptybase.and.returnValue(true);
    
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

  it('Se encuentra vacia la base de datos',()=>{
    expect(mockdbservices.isemptybase()).toBeTruthy();
    mockdbservices.isemptybase = jasmine.createSpy().and.returnValue(false);
    expect(mockdbservices.isemptybase()).toBeFalsy();
  });


  it('La lista que se recibe de base de datos no debe ser null', ()=>{
    expect(component.getUserfromback()).not.toBeNull();
  })

  it('No se puede eliminar un usuario de tipo administrador', ()=>{
    let correo_admin='admin@gmail.com'
    expect(component.deleteuser(correo_admin)).toBeFalse();
  });

  

  it('Eliminado usuario no administrador', ()=>{
    let correo_admin='abner@gmail.com'
    expect(component.deleteuser(correo_admin)).toBeTrue();
  });

});
