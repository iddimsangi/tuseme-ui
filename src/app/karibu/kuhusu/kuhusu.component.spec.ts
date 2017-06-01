import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuhusuComponent } from './kuhusu.component';

describe('KuhusuComponent', () => {
  let component: KuhusuComponent;
  let fixture: ComponentFixture<KuhusuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuhusuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuhusuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
