import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParentCategoryComponent } from './add-parent-category.component';

describe('AddParentCategoryComponent', () => {
  let component: AddParentCategoryComponent;
  let fixture: ComponentFixture<AddParentCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddParentCategoryComponent]
    });
    fixture = TestBed.createComponent(AddParentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
