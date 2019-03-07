import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  save(name: string, value: any): any {
    localStorage.setItem(name, JSON.stringify(value));
  }

  get(name: string): any {
     const value =  localStorage.getItem(name);
    try{
      return JSON.parse(value);
    }catch(err){
      return null;
    }
  }

  remove(name: string): any {
    localStorage.removeItem(name);
  }

  constructor() { }
}
