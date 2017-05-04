import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalalamikoHomeComponent } from './malalamiko-home.component';

describe('MalalamikoHomeComponent', () => {
  let component: MalalamikoHomeComponent;
  let fixture: ComponentFixture<MalalamikoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalalamikoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalalamikoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
