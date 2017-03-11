import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TumaUjumbeComponent } from './tuma-ujumbe.component';

describe('TumaUjumbeComponent', () => {
  let component: TumaUjumbeComponent;
  let fixture: ComponentFixture<TumaUjumbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TumaUjumbeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TumaUjumbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
