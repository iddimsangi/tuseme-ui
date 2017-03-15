import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TumaMapendekezoComponent } from './tuma-mapendekezo.component';

describe('TumaMapendekezoComponent', () => {
  let component: TumaMapendekezoComponent;
  let fixture: ComponentFixture<TumaMapendekezoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TumaMapendekezoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TumaMapendekezoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
