import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStreetsComponent } from './all-streets.component';

describe('AllStreetsComponent', () => {
  let component: AllStreetsComponent;
  let fixture: ComponentFixture<AllStreetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStreetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStreetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
