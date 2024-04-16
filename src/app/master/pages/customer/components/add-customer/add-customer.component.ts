import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
  constructor(private fb: FormBuilder) { }
  customerForm = this.fb.group({
    mainCustomer: [''],
    name: [''],
    code: [''],
    type: [''],
    contactNo: [''],
    contactPerson: [''],
    email: [''],
    grade: [],
    salesLeadName: [''],
    salesCode: [''],
    destinationPort: [''],
    finalDestination: [''],
    pieceWeightTolerance: [''],
    invoiceTolerance: [''],
    state: [''],
    gstIn: [''],
    aadhaarNumber: [''],
    pan: [''],
    country: [''],
    handledBy: [''],
    address: ['']
  })
}
