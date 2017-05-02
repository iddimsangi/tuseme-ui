import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapendekezoHomeComponent } from './mapendekezo-home.component';

describe('MapendekezoHomeComponent', () => {
  let component: MapendekezoHomeComponent;
  let fixture: ComponentFixture<MapendekezoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapendekezoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapendekezoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
