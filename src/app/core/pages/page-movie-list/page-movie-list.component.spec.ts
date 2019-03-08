import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PageMovieListComponent } from './page-movie-list.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieListItemComponent } from '../../components/movie-list-item/movie-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../../interfaces/movie.interface';

describe('PageMovieListComponent', () => {
  let component: PageMovieListComponent;
  let fixture: ComponentFixture<PageMovieListComponent>;
  let $element: HTMLHtmlElement = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMovieListComponent, MovieListComponent, MovieListItemComponent ],
      imports:[ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMovieListComponent);
    component = fixture.componentInstance;
    $element = fixture.debugElement.nativeElement;
  });

  afterEach (()=> {
    fixture.debugElement.nativeElement.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display thumb list (>3)', fakeAsync(() => {
    const movie: Movie = {
      id: 'fake-id',
      title: 'fake-title',
      description: 'fake-desc',
      thumb_url: 'fake-url-thumb',
      movie_url: 'fake-url-thumb',
      year: 1234,
      duration: 123,
      rate: 12,
    }
    component.getMovies= () => Promise.resolve([movie,movie,movie,movie,movie]);
    fixture.detectChanges();
    flush();
    expect(component.movies.length).toBeGreaterThan(3);
    fixture.detectChanges();
    const list = $element.querySelectorAll('app-movie-list-item');
    expect(list.length).toBeGreaterThan(3);

  }));

});
