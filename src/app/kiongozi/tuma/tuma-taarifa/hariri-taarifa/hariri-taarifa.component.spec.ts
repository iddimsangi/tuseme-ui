import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaririTaarifaComponent } from './hariri-taarifa.component';

describe('HaririTaarifaComponent', () => {
  let component: HaririTaarifaComponent;
  let fixture: ComponentFixture<HaririTaarifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaririTaarifaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaririTaarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
