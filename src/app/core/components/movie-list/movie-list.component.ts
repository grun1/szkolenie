import { Component, OnInit, Input } from '@angular/core';
import { MovieList } from 'src/app/core/interfaces/movie-list.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies: MovieList = null;

  constructor() { }

  ngOnInit() {
  }

}
