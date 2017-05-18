import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalalamikoHaririComponent } from './malalamiko-hariri.component';

describe('MalalamikoHaririComponent', () => {
  let component: MalalamikoHaririComponent;
  let fixture: ComponentFixture<MalalamikoHaririComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalalamikoHaririComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalalamikoHaririComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
