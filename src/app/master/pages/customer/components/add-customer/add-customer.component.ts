import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { CustomerService } from 'src/app/providers/customer/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCustomerComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private commonService: CommonService, private customerService: CustomerService) { }
  countries = [{ label: "India", value: "India" }, { label: "USA", value: "USA" }, { label: "UK", value: "UK" }, { label: "Singapore", value: "Singapore" }, { label: "Malaysia", value: "Malaysia" }]
  states = [{ label: "Tamil Nadu", value: "Tamil Nadu" }]
  mainCustomers: any = []
  salesLeads: any = []
  apiLoader = false;

  customerForm = this.fb.group({
    mainCustomerId: ['', [Validators.required]],
    name: ['', [Validators.required]],
    code: ['', [Validators.required]],
    type: ['', [Validators.required]],
    contactNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    contactPerson: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.email]],
    grade: ['', [Validators.required]],
    salesLeadId: ['', [Validators.required]],
    salesCode: ['', [Validators.required]],
    destinationPort: ['', [Validators.required]],
    finalDestination: ['', [Validators.required]],
    pieceWeightTolerance: ['', [Validators.required]],
    invoiceTolerance: ['', [Validators.required]],
    state: ['', [Validators.required]],
    gstIn: ['', [Validators.required]],
    aadhaarNumber: ['', [Validators.required]],
    pan: ['', [Validators.required]],
    country: ['', [Validators.required]],
    handledBy: ['', [Validators.required]],
    address: ['', [Validators.required]]
  })

  ngOnInit() {
    this.patchMainCustomer();
    this.getAllMainCustomer();
    this.getAllSalesLead();
  }

  save(isEdit: boolean) {
    this.customerForm.markAllAsTouched();
    if (this.customerForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateCustomer(this.customerForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createCustomer(this.customerForm.getRawValue());
    }
  }

  patchMainCustomer() {
    if (this.dialogData) {
      this.customerForm.patchValue(this.dialogData);
    }
  }

  createCustomer(payload: any) {
    this.apiLoader = true;
    this.customerService.createCustomer(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Customer created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  updateCustomer(payload: any, id: string) {
    this.apiLoader = true;
    this.customerService.updateCustomer(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Customer updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  getAllMainCustomer() {
    this.customerService.getAllMainCustomer().subscribe({
      next: (res) => {
        this.mainCustomers = res.data
      }
    })
  }

  getAllSalesLead() {
    this.customerService.getAllSalesLead().subscribe({
      next: (res) => {
        this.salesLeads = res.data
      }
    })
  }
}
