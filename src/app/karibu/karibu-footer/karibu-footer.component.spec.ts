import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaribuFooterComponent } from './karibu-footer.component';

describe('KaribuFooterComponent', () => {
  let component: KaribuFooterComponent;
  let fixture: ComponentFixture<KaribuFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaribuFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaribuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
