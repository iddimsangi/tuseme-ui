import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLeaderComponent } from './register-leader.component';

describe('RegisterLeaderComponent', () => {
  let component: RegisterLeaderComponent;
  let fixture: ComponentFixture<RegisterLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
