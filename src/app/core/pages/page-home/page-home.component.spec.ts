import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

import { PageHomeComponent } from './page-home.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieListItemComponent } from '../../components/movie-list-item/movie-list-item.component';
import { Movie } from '../../interfaces/movie.interface';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;
  let $element: HTMLHtmlElement = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeComponent, MovieListComponent, MovieListItemComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  afterEach (()=> {
      fixture.debugElement.nativeElement.remove();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeComponent);
    component = fixture.componentInstance;
    $element = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display thumb list', fakeAsync(() => {
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

    component.getPromoMovies= () => Promise.resolve([movie,movie,movie]);
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    const list = $element.querySelectorAll('app-movie-list-item');
    expect(list.length).toEqual(3);

  }));

});

