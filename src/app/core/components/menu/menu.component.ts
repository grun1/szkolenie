import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MenuComponent implements OnInit {

  isLoggedUser = false;
  loggerUserName: User = null;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event)=> event instanceof NavigationEnd)
      )
      .subscribe(this.verifyLoggedUser.bind(this));
  }

  async verifyLoggedUser(){
    try{
      await this.auth.isLoggedUser();
      this.isLoggedUser = true;
      this.loggerUserName = await this.auth.getLoggedUserName();
    }catch(err){
      this.isLoggedUser = false;
    }
  }

}
