import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZilizoandikwaComponent } from './zilizoandikwa.component';

describe('ZilizoandikwaComponent', () => {
  let component: ZilizoandikwaComponent;
  let fixture: ComponentFixture<ZilizoandikwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZilizoandikwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZilizoandikwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
