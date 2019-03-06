import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList = [
    {
      title: 'Polski film #1',
      description: 'Lorem ipsum vol. 1',
      image: 'https://picsum.photos/320/200?image=111'
    },
    {
      title: 'Polski film #2',
      description: 'Lorem ipsum vol. 1',
      image: 'https://picsum.photos/320/200?image=112'
    },
    {
      title: 'Polski film #3',
      description: 'Lorem ipsum vol. 1',
      image: 'https://picsum.photos/320/200?image=113'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
