import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapendekezoYaliyotumwaComponent } from './mapendekezo-yaliyotumwa.component';

describe('MapendekezoYaliyotumwaComponent', () => {
  let component: MapendekezoYaliyotumwaComponent;
  let fixture: ComponentFixture<MapendekezoYaliyotumwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapendekezoYaliyotumwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapendekezoYaliyotumwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
