import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainCustomerComponent } from './add-main-customer.component';

describe('AddMainCustomerComponent', () => {
  let component: AddMainCustomerComponent;
  let fixture: ComponentFixture<AddMainCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMainCustomerComponent]
    });
    fixture = TestBed.createComponent(AddMainCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
