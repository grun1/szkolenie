import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListItemComponent } from './movie-list-item.component';

describe('MovieListItemComponent', () => {
  let component: MoveListItemComponent;
  let fixture: ComponentFixture<MoveListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
