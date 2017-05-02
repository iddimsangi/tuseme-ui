import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UjumbeUliotumwaComponent } from './ujumbe-uliotumwa.component';

describe('UjumbeUliotumwaComponent', () => {
  let component: UjumbeUliotumwaComponent;
  let fixture: ComponentFixture<UjumbeUliotumwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UjumbeUliotumwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UjumbeUliotumwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
