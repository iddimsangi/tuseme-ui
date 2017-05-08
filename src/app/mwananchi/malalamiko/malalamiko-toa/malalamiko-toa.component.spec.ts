import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalalamikoToaComponent } from './malalamiko-toa.component';

describe('MalalamikoToaComponent', () => {
  let component: MalalamikoToaComponent;
  let fixture: ComponentFixture<MalalamikoToaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalalamikoToaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalalamikoToaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
