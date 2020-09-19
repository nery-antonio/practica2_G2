import { analyzeAndValidateNgModules } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';

import { RegisterServiceService } from './register-service.service';
import { StorageService} from './storage.service'

class MockStorageService{
    registered = true;

    setItem(fake_user){
      return this.registered;
    }

    validateItem(fake_username){
      return this.registered;
    }
}

describe('RegisterServiceService', () => {
  let service: RegisterServiceService;
  let storage_service :MockStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    //service = TestBed.inject(RegisterServiceService);

    storage_service = new MockStorageService();
    service = new RegisterServiceService(storage_service);


  });

  it('necesita saber si logro un registro correctamente', ()=>{

    storage_service.registered = true;

    let fake_user=null;

    expect(service.signup(fake_user)).not.toBeNull();

  })

 
});
