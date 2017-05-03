import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UjumbeHomeComponent } from './ujumbe-home.component';

describe('UjumbeHomeComponent', () => {
  let component: UjumbeHomeComponent;
  let fixture: ComponentFixture<UjumbeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UjumbeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UjumbeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
