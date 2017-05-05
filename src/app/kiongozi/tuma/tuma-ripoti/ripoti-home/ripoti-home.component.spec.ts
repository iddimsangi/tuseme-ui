import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RipotiHomeComponent } from './ripoti-home.component';

describe('RipotiHomeComponent', () => {
  let component: RipotiHomeComponent;
  let fixture: ComponentFixture<RipotiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RipotiHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RipotiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
