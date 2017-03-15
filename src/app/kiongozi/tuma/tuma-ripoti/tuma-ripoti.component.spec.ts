import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TumaRipotiComponent } from './tuma-ripoti.component';

describe('TumaRipotiComponent', () => {
  let component: TumaRipotiComponent;
  let fixture: ComponentFixture<TumaRipotiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TumaRipotiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TumaRipotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
