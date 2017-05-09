import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UjumbeHaririComponent } from './ujumbe-hariri.component';

describe('UjumbeHaririComponent', () => {
  let component: UjumbeHaririComponent;
  let fixture: ComponentFixture<UjumbeHaririComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UjumbeHaririComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UjumbeHaririComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
