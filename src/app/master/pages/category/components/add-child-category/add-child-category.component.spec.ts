import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChildCategoryComponent } from './add-child-category.component';

describe('AddChildCategoryComponent', () => {
  let component: AddChildCategoryComponent;
  let fixture: ComponentFixture<AddChildCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddChildCategoryComponent]
    });
    fixture = TestBed.createComponent(AddChildCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
