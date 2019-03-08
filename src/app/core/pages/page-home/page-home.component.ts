import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MovieList } from 'src/app/core/interfaces/movie-list.interface';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent  {

  movies: MovieList = null;
  debugElement: any;

  constructor(
    private moviesService: MoviesService
  ) { }

  async ngOnInit() {
    console.log('ngonInit');

    this.movies = await this.getPromoMovies();
  }

  async getPromoMovies(){
    return await this.moviesService.fetchPromoMovies();
  }

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
