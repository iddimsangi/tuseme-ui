import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuaHomeComponent } from './dua-home.component';

describe('DuaHomeComponent', () => {
  let component: DuaHomeComponent;
  let fixture: ComponentFixture<DuaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
