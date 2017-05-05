import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndikaComponent } from './andika.component';

describe('AndikaComponent', () => {
  let component: AndikaComponent;
  let fixture: ComponentFixture<AndikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
