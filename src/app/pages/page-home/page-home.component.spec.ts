import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeComponent } from './page-home.component';

describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeComponent ]
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
