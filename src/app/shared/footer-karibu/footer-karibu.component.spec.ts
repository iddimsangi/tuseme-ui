import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterKaribuComponent } from './footer-karibu.component';

describe('FooterKaribuComponent', () => {
  let component: FooterKaribuComponent;
  let fixture: ComponentFixture<FooterKaribuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterKaribuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterKaribuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
