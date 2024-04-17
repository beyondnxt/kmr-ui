import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent {
  constructor(private fb: FormBuilder) { }
  companyForm = this.fb.group({
    companyName: [''],
    location: [''],
    code: [''],
    companyVattin: [''],
    email: [''],
    companyGstNo: [''],
    companyPan: [''],
    gstIn: [''],
    accountYear: [''],
    mobileNumber: [''],
    referenceNumber: [''],
    address: ['']
  })
}
