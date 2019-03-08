import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PageMovieListComponent } from './page-movie-list.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieListItemComponent } from '../../components/movie-list-item/movie-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageMovieListComponent', () => {
  let component: PageMovieListComponent;
  let fixture: ComponentFixture<PageMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMovieListComponent, MovieListComponent ,MovieListItemComponent ],
      imports:[ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
