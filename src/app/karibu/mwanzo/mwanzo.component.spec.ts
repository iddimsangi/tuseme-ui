import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwanzoComponent } from './mwanzo.component';

describe('MwanzoComponent', () => {
  let component: MwanzoComponent;
  let fixture: ComponentFixture<MwanzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwanzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwanzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
