import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserLoginComponent } from './page-user-login.component';

describe('PageUserLoginComponent', () => {
  let component: PageUserLoginComponent;
  let fixture: ComponentFixture<PageUserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUserLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
