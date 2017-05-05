import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndikaRipotiComponent } from './andika-ripoti.component';

describe('AndikaRipotiComponent', () => {
  let component: AndikaRipotiComponent;
  let fixture: ComponentFixture<AndikaRipotiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndikaRipotiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndikaRipotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
