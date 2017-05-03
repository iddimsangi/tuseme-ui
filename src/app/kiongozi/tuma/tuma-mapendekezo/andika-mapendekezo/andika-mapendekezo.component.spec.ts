import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndikaMapendekezoComponent } from './andika-mapendekezo.component';

describe('AndikaMapendekezoComponent', () => {
  let component: AndikaMapendekezoComponent;
  let fixture: ComponentFixture<AndikaMapendekezoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndikaMapendekezoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndikaMapendekezoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
