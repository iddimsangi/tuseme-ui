import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TumaTaarifaComponent } from './tuma-taarifa.component';

describe('TumaTaarifaComponent', () => {
  let component: TumaTaarifaComponent;
  let fixture: ComponentFixture<TumaTaarifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TumaTaarifaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TumaTaarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
