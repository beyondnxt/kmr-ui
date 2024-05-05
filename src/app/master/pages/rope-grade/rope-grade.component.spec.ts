import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeGradeComponent } from './rope-grade.component';

describe('RopeGradeComponent', () => {
  let component: RopeGradeComponent;
  let fixture: ComponentFixture<RopeGradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RopeGradeComponent]
    });
    fixture = TestBed.createComponent(RopeGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
