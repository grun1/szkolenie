import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAuthorsComponent } from './page-authors.component';

describe('PageAuthorsComponent', () => {
  let component: PageAuthorsComponent;
  let fixture: ComponentFixture<PageAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
