import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
  constructor(private fb: FormBuilder) { }
  customerForm = this.fb.group({
    mainCustomer: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    code: ['', [Validators.required]],
    type: ['', [Validators.required]],
    contactNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    contactPerson: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.email]],
    grade: ['', [Validators.required]],
    salesLeadName: ['', [Validators.required]],
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
}
