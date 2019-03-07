import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-movie-profile',
  templateUrl: './page-movie-profile.component.html',
  styleUrls: ['./page-movie-profile.component.css']
})
export class PageMovieProfileComponent implements OnInit {

  movie = null;

  constructor(
    private movieServices: MoviesService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const movieId = this.route.snapshot.params.id;
    this.movie = await this.movieServices.fetchMovieById(movieId);
  }


}
