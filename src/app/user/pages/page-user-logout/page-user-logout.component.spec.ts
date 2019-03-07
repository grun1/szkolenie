import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserLogoutComponent } from './page-user-logout.component';

describe('PageUserLogoutComponent', () => {
  let component: PageUserLogoutComponent;
  let fixture: ComponentFixture<PageUserLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUserLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
