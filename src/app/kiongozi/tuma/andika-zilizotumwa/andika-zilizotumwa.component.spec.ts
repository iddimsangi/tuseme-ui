import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndikaZilizotumwaComponent } from './andika-zilizotumwa.component';

describe('AndikaZilizotumwaComponent', () => {
  let component: AndikaZilizotumwaComponent;
  let fixture: ComponentFixture<AndikaZilizotumwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndikaZilizotumwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndikaZilizotumwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
