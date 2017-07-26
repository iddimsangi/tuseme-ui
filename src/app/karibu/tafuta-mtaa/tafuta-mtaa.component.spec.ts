import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TafutaMtaaComponent } from './tafuta-mtaa.component';

describe('TafutaMtaaComponent', () => {
  let component: TafutaMtaaComponent;
  let fixture: ComponentFixture<TafutaMtaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafutaMtaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TafutaMtaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
