import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwananchiComponent } from './mwananchi.component';

describe('MwananchiComponent', () => {
  let component: MwananchiComponent;
  let fixture: ComponentFixture<MwananchiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwananchiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwananchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
