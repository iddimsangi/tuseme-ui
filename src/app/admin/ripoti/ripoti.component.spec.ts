import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RipotiComponent } from './ripoti.component';

describe('RipotiComponent', () => {
  let component: RipotiComponent;
  let fixture: ComponentFixture<RipotiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RipotiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RipotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
