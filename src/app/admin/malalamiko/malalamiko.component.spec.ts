import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalalamikoComponent } from './malalamiko.component';

describe('MalalamikoComponent', () => {
  let component: MalalamikoComponent;
  let fixture: ComponentFixture<MalalamikoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalalamikoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalalamikoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
