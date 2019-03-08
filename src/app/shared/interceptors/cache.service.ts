import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { HttpInterceptorHandler, HttpInterceptor } from '@angular/common/http/src/interceptor';
import { tap, filter } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { CacheManagerService } from '../services/cache-manager.service';

const cache = new Map();

@Injectable({
  providedIn: 'root'
})
export class CacheService implements HttpInterceptor{  // TODO change to cacheInterceptor
  intercept(req:HttpRequest<any>, next: HttpHandler): import("rxjs").Observable<HttpEvent<any>> {

    if(cache.has(req.url)){
      console.log('From cache'+req.url);
      return of( cache.get(req.url) );
    }
    return next.handle(req)
    .pipe(
      filter((event) => event instanceof HttpResponse),
      tap((response)=>{
        console.log('From server'+req.url);

        cache.set(req.url,response);
      })
    )
    ;
  }

  constructor(
    private cacheManager: CacheManagerService
  ) { }
}
