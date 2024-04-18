import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent {
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddCompanyComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  companyForm = this.fb.group({
    companyName: ['', [Validators.required]],
    location: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    code: ['', [Validators.required]],
    companyVattin: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    companyGstNo: ['', [Validators.required]],
    companyPan: ['', [Validators.required]],
    gstIn: ['', [Validators.required]],
    accountYear: ['', [Validators.required]],
    mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    referenceNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    address: ['', [Validators.required]]
  })
  save(){
    this.companyForm.markAllAsTouched();
  }
}
