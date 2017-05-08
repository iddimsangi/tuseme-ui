import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RipotiZilizotumwaComponent } from './ripoti-zilizotumwa.component';

describe('RipotiZilizotumwaComponent', () => {
  let component: RipotiZilizotumwaComponent;
  let fixture: ComponentFixture<RipotiZilizotumwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RipotiZilizotumwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RipotiZilizotumwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
