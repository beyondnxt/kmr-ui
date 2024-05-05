import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddUserComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any,public commonService:CommonService) { }
  roles = [{ label: "Admin", value: "1" }, { label: "Owner", value: "2" }, { label: "Lead", value: "3" }];
  
  ngOnInit() {
    this.patchUser();
  }

  userForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    companyId: ['1'],
    roleId: ['', [Validators.required]],
    status: [true]
  })

  save(isEdit: boolean) {
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) {
      this.commonService.showSnackbar('Please fill all require fields');
      return;
    } else {
      this.dialogRef.close({ formData: this.userForm.getRawValue(), isEdit: isEdit, id: this.dialogData?.id })
    }
  }
  patchUser() {
    if (this.dialogData) {
      this.userForm.patchValue(this.dialogData);
    }
  }
}
