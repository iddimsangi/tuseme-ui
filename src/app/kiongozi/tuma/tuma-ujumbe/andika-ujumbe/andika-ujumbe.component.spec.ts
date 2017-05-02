import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndikaUjumbeComponent } from './andika-ujumbe.component';

describe('AndikaUjumbeComponent', () => {
  let component: AndikaUjumbeComponent;
  let fixture: ComponentFixture<AndikaUjumbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndikaUjumbeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndikaUjumbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
