import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaririRipotiComponent } from './hariri-ripoti.component';

describe('HaririRipotiComponent', () => {
  let component: HaririRipotiComponent;
  let fixture: ComponentFixture<HaririRipotiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaririRipotiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaririRipotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
