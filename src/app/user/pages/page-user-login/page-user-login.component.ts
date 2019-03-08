import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-user-login',
  templateUrl: './page-user-login.component.html',
  styleUrls: ['./page-user-login.component.css']
})
export class PageUserLoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  user = {
    email: null,
    password: null
  }

  errorMassage = null;

  ngOnInit() {
  }

  async handleSubmit(){
    try {
      await this.auth.authenticate(this.user);
      await this.auth.saveLoggedUser(this.user);

      this.auth.saveLoggedUser(this.user);
      this.router.navigate(['/user/profile']);
    }catch(err){
      this.errorMassage = 'Złe hasło';
    }

  }

}
