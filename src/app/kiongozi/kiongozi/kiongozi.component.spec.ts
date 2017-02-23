import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiongoziComponent } from './kiongozi.component';

describe('KiongoziComponent', () => {
  let component: KiongoziComponent;
  let fixture: ComponentFixture<KiongoziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiongoziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiongoziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
