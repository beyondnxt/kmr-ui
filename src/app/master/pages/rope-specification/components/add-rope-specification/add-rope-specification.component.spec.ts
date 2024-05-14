import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRopeSpecificationComponent } from './add-rope-specification.component';

describe('AddRopeSpecificationComponent', () => {
  let component: AddRopeSpecificationComponent;
  let fixture: ComponentFixture<AddRopeSpecificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRopeSpecificationComponent]
    });
    fixture = TestBed.createComponent(AddRopeSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
