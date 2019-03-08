import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PageHomeComponent } from './page-home.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieListItemComponent } from '../../components/movie-list-item/movie-list-item.component';

describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeComponent, MovieListComponent, MovieListItemComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  afterEach (()=> {
      fixture.debugElement.nativeElement.remove();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add simple numbers', () => {
    expect(component.addNumbers(2,2)).toEqual(4);
    expect(component.addNumbers(-2,2)).toEqual(0);
    expect(component.addNumbers(-5,5)).toEqual(0);
    expect(component.addNumbers('piotr',1)).toEqual(null);
  });


});
