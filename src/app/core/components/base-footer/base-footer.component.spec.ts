import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFooterComponent } from './base-footer.component';

describe('BaseFooterComponent', () => {
  let component: BaseFooterComponent;
  let fixture: ComponentFixture<BaseFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach (()=> {
    fixture.debugElement.nativeElement.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
