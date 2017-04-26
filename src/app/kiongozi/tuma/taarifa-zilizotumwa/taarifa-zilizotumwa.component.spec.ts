import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaarifaZilizotumwaComponent } from './taarifa-zilizotumwa.component';

describe('TaarifaZilizotumwaComponent', () => {
  let component: TaarifaZilizotumwaComponent;
  let fixture: ComponentFixture<TaarifaZilizotumwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaarifaZilizotumwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaarifaZilizotumwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
