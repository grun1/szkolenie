import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PageUserLoginComponent } from './pages/page-user-login/page-user-login.component';
import { PageUserProfileComponent } from './pages/page-user-profile/page-user-profile.component';
import { PageUserRegisterComponent } from './pages/page-user-register/page-user-register.component';

@NgModule({
  declarations: [
    PageUserLoginComponent,
    PageUserProfileComponent,
    PageUserRegisterComponent
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
