import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalesAdminComponent } from './add-sales-admin.component';

describe('AddSalesAdminComponent', () => {
  let component: AddSalesAdminComponent;
  let fixture: ComponentFixture<AddSalesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSalesAdminComponent]
    });
    fixture = TestBed.createComponent(AddSalesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
