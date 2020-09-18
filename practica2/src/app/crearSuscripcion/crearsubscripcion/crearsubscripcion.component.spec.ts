import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearsubscripcionComponent } from './crearsubscripcion.component';

describe('CrearsubscripcionComponent', () => {
  let component: CrearsubscripcionComponent;
  let fixture: ComponentFixture<CrearsubscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearsubscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearsubscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
