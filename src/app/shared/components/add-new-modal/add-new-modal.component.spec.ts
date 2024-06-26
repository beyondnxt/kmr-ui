import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewModalComponent } from './add-new-modal.component';

describe('AddNewModalComponent', () => {
  let component: AddNewModalComponent;
  let fixture: ComponentFixture<AddNewModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewModalComponent]
    });
    fixture = TestBed.createComponent(AddNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
