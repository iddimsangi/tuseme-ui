import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KayaComponent } from './kaya.component';

describe('KayaComponent', () => {
  let component: KayaComponent;
  let fixture: ComponentFixture<KayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
