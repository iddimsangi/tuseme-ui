import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderKaribuComponent } from './header-karibu.component';

describe('HeaderKaribuComponent', () => {
  let component: HeaderKaribuComponent;
  let fixture: ComponentFixture<HeaderKaribuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderKaribuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderKaribuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
