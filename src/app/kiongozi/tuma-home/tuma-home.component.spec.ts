import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TumaHomeComponent } from './tuma-home.component';

describe('TumaHomeComponent', () => {
  let component: TumaHomeComponent;
  let fixture: ComponentFixture<TumaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TumaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TumaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
