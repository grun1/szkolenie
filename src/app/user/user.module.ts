import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { PageUserLoginComponent } from './pages/page-user-login/page-user-login.component';
import { PageUserProfileComponent } from './pages/page-user-profile/page-user-profile.component';
import { PageUserRegisterComponent } from './pages/page-user-register/page-user-register.component';
import { SharedModule } from '../shared/shared.module';
import { PageUserLogoutComponent } from './pages/page-user-logout/page-user-logout.component';

@NgModule({
  declarations: [
    PageUserLoginComponent,
    PageUserProfileComponent,
    PageUserRegisterComponent,
    PageUserLogoutComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UserModule { }
