import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-user-logout',
  templateUrl: './page-user-logout.component.html',
  styleUrls: ['./page-user-logout.component.css']
})
export class PageUserLogoutComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.destroySession();
    this.router.navigate(['/']);
  }

}
