import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RipotiHaririComponent } from './ripoti-hariri.component';

describe('RipotiHaririComponent', () => {
  let component: RipotiHaririComponent;
  let fixture: ComponentFixture<RipotiHaririComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RipotiHaririComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RipotiHaririComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
