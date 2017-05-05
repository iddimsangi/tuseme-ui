import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaarifaHomeComponent } from './taarifa-home.component';

describe('TaarifaHomeComponent', () => {
  let component: TaarifaHomeComponent;
  let fixture: ComponentFixture<TaarifaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaarifaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaarifaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
