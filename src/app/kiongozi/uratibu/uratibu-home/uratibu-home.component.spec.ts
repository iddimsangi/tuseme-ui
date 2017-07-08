import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UratibuHomeComponent } from './uratibu-home.component';

describe('UratibuHomeComponent', () => {
  let component: UratibuHomeComponent;
  let fixture: ComponentFixture<UratibuHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UratibuHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UratibuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
