import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-user-login',
  templateUrl: './page-user-login.component.html',
  styleUrls: ['./page-user-login.component.css']
})
export class PageUserLoginComponent implements OnInit {

  constructor() { }

  user={
    email: null,
    password: null
  }

  ngOnInit() {
  }

  handleSubmit(){
    console.log(this.user.email);
  }

}
