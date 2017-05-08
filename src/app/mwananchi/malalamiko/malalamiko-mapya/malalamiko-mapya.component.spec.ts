import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalalamikoMapyaComponent } from './malalamiko-mapya.component';

describe('MalalamikoMapyaComponent', () => {
  let component: MalalamikoMapyaComponent;
  let fixture: ComponentFixture<MalalamikoMapyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalalamikoMapyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalalamikoMapyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
