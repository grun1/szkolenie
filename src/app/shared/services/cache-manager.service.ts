import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheManagerService {

  cache = new Map();

  has(key) {
     return this.cache.has(key);
  }
  get(key) {
     return this.cache.get(key);}

  set(key,value) {
    return this.cache.set(key,value);
  }

  constructor() { }
}
