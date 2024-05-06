import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent {
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddCompanyComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any,public commonService:CommonService) { }

  ngOnInit() {
    this.patchCompany();
  }

  companyForm = this.fb.group({
    companyName: ['', [Validators.required]],
    location: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    code: ['', [Validators.required]],
    vatTin: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.pattern(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),]],
    cstNo: ['', [Validators.required]],
    pan: ['', [Validators.required]],
    gstIn: ['', [Validators.required]],
    accountYear: ['', [Validators.required]],
    mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    referenceNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    address: ['', [Validators.required]]
  })

  save(isEdit:boolean){
    this.companyForm.markAllAsTouched();
    if (this.companyForm.invalid) {
      this.commonService.notification('Failed','Please fill all required fields','fail')
      return;
    } else {
      this.dialogRef.close({ formData: this.companyForm.getRawValue(), isEdit: isEdit, id: this.dialogData?.id })
    }
  }

  patchCompany() {
    if (this.dialogData) {
      this.companyForm.patchValue(this.dialogData);
    }
  }
  
}
