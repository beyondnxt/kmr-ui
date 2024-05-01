import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRopeGradeComponent } from './add-rope-grade.component';

describe('AddRopeGradeComponent', () => {
  let component: AddRopeGradeComponent;
  let fixture: ComponentFixture<AddRopeGradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRopeGradeComponent]
    });
    fixture = TestBed.createComponent(AddRopeGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
