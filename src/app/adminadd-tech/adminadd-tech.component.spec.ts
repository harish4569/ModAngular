import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddTechComponent } from './adminadd-tech.component';

describe('AdminaddTechComponent', () => {
  let component: AdminaddTechComponent;
  let fixture: ComponentFixture<AdminaddTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaddTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
