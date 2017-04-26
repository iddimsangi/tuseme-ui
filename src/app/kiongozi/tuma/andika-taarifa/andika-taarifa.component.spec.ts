import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndikaTaarifaComponent } from './andika-taarifa.component';

describe('AndikaTaarifaComponent', () => {
  let component: AndikaTaarifaComponent;
  let fixture: ComponentFixture<AndikaTaarifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndikaTaarifaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndikaTaarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
