import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent  {

  constructor() { }

  addNumbers(a,b){

    if(typeof(a) != 'number'){
      return null;
    }

    if(typeof(b) != 'number'){
      return null;
    }


    return a+b;
  }

}
