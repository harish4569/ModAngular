import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSingupComponent } from './mentor-singup.component';

describe('MentorSingupComponent', () => {
  let component: MentorSingupComponent;
  let fixture: ComponentFixture<MentorSingupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorSingupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
