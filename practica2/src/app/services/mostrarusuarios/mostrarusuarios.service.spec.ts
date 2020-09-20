import { TestBed } from '@angular/core/testing';

import { MostrarusuariosService } from './mostrarusuarios.service';

describe('MostrarusuariosService', () => {
  let service: MostrarusuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarusuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
