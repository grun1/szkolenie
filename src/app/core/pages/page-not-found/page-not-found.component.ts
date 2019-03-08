import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  playerStatus = 'Loading';

  movie =   {
    "id": "2zR1GOLhlU4",
    "title": "Hellboy",
    "description": "",
    "thumb_url": "http://i3.ytimg.com/vi/2zR1GOLhlU4/hqdefault.jpg",
    "movie_url": "https://www.youtube.com/embed/2zR1GOLhlU4",

    "year": 2019,
    "duration": 120,
    "rate": 6.66
}

  ngOnInit() {
  }

  handleStatus(evt){
    console.log('handle',evt);
    switch (evt.status){
      case 'playing':
       this.playerStatus = 'Player is playing';
       break;
       case 'pause':
       this.playerStatus = 'Player is paused';
       break;
       default:
       this.playerStatus = 'Player is idle';
    }
  }

}
