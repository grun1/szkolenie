import { TestBed, flush, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';


describe('MoviesService', () => {
  let service: MoviesService = null;

  beforeEach(() => {
    TestBed.configureTestingModule ({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(MoviesService);
  });


  it('should be created', () => {
    const service: MoviesService = TestBed.get(MoviesService);
    expect(service).toBeTruthy();
  });

  describe('fetchMovies', ()=>{
    it('should exists', () => {
      const service: MoviesService = TestBed.get(MoviesService);
      expect(service.fetchMovies).toEqual(jasmine.any(Function));
    });

    it('should return long list of movies',fakeAsync(() => {
      service.fetchMovies()
      .then((movies)=>{
        expect(movies.length).toEqual(8);
      });
    }));
  });

  describe('fetchPromoMovies', ()=>{
    it('should be created', () => {
      const service: MoviesService = TestBed.get(MoviesService);
      expect(service.fetchPromoMovies).toEqual(jasmine.any(Function));
    });
  });

  describe('fetchMovieById', ()=>{
    it('should be created', () => {
      const service: MoviesService = TestBed.get(MoviesService);
      expect(service.fetchMovieById).toEqual(jasmine.any(Function));
    });
  });

});
