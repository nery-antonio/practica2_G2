import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {


  constructor(private storage: StorageService) { }

  public signup(usuario:any):Observable<any>
  {

    return this.storage.setItem(usuario);
    
  }

  existe(username:string):boolean{
    return this.storage.validateItem(username);
  }

}
