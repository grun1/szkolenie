import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Status } from '../interfaces/status';
import { User } from '../interfaces/user';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 

  constructor(
    private localStorage: LocalStorageService
  ) { }

  register(formData:any): Promise<Status>{
    return new Promise((resolve, reject)=>{
      const users = this.localStorage.get('users') || [];
      users.push(formData);
      this.localStorage.save('users',users);
      setTimeout(()=>{
        resolve({status:'ok'});
      },200);
    });
  }

  authenticate(formData): Promise<Status>{
    return new Promise ((resolve,reject)=>{
      const users = this.localStorage.get('users') || [];
      const status = users.find((user)=>{
        return user.email === formData.email && user.password === formData.password; 
      });

      if(status) {
        resolve({status: 'ok'});
      }else{
        reject({status: 'error'});
      }

    });
  }

  getUserByEmail(userEmail: string): Promise<User>{
    return new Promise ((resolve,reject)=>{
      const users = this.localStorage.get('users') || [];
      const foundUser = users.find((user)=>{
        return user.email === userEmail; 
      });

      if(foundUser) {
        resolve(foundUser);
      }else{
        reject(null);
      }

    });
  }


  saveLoggedUser(user): Promise<Status> {
    return new Promise ((resolve,reject)=>{
      this.localStorage.save('logged-user', user.email);
      setTimeout(resolve,200,{status:'ok'});
    });
  }

  isLoggedUser(): Promise<Status> {
    return new Promise ((resolve,reject)=>{
      const status = this.localStorage.get('logged-user');
      if (status){
        setTimeout(resolve,200,{status:'ok'});
      }else{
        setTimeout(resolve,400,{status:'err'});
      }

    });
  }

  getLoggedUserName(): Promise<string>{
    return new Promise ((resolve,reject)=>{
      const loggedUser = this.localStorage.get('logged-user');
      if (loggedUser){
        this.getUserByEmail(loggedUser)
        .then((user)=>{
          setTimeout(resolve,200,`${user.person.name} ${user.person.surname}`)
        })
      }else{
        setTimeout(reject,200,`brak`)
      }
    });
  }

  destroySession(): any {
    return new Promise((resolve) =>{
      this.localStorage.remove('logged-user');
      setTimeout(resolve,200)
    });
  }
}
