import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDuaComponent } from './new-dua.component';

describe('NewDuaComponent', () => {
  let component: NewDuaComponent;
  let fixture: ComponentFixture<NewDuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
