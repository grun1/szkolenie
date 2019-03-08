import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { CacheService } from './interceptors/cache.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserDisplayNamePipe } from './pipes/user-display-name.pipe';

@NgModule({
  declarations: [UserDisplayNamePipe],
  imports: [
    CommonModule
  ],
  exports: [
    UserDisplayNamePipe
  ],
  providers:[
    AuthService,
    {
      useClass: CacheService, // TODO change to cacheInterceptor
      provide: HTTP_INTERCEPTORS,
      multi:true
    }
  ]
})
export class SharedModule { }
