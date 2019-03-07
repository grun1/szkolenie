import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localStorage: LocalStorageService
  ) { }

  register(formData:any):any{
    console.log(formData);
    return new Promise((resolve, reject)=>{
      this.localStorage.save('user',formData);

      setTimeout(()=>{
        resolve({status:'ok'});
      },200);
    });
  }

}
