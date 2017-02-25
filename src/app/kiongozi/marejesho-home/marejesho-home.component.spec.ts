import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarejeshoHomeComponent } from './marejesho-home.component';

describe('MarejeshoHomeComponent', () => {
  let component: MarejeshoHomeComponent;
  let fixture: ComponentFixture<MarejeshoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarejeshoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarejeshoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
