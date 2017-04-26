import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaarifaHaririComponent } from './taarifa-hariri.component';

describe('TaarifaHaririComponent', () => {
  let component: TaarifaHaririComponent;
  let fixture: ComponentFixture<TaarifaHaririComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaarifaHaririComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaarifaHaririComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
