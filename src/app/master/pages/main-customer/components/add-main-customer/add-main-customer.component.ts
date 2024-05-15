import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { MainCustomerService } from 'src/app/providers/main-customer/main-customer.service';

@Component({
  selector: 'app-add-main-customer',
  templateUrl: './add-main-customer.component.html',
  styleUrls: ['./add-main-customer.component.scss']
})
export class AddMainCustomerComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddMainCustomerComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private commonService: CommonService, private mainCustomerService: MainCustomerService) { }
  countries = [{ label: "India", value: "India" }, { label: "USA", value: "USA" }, { label: "UK", value: "UK" }, { label: "Singapore", value: "Singapore" }, { label: "Malaysia", value: "Malaysia" }]
  apiLoader = false
  mainCustomerForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    code: ['', [Validators.required]],
    type: ['', [Validators.required]],
    country: ['', [Validators.required]]
  })

  ngOnInit() {
    this.patchMainCustomer();
  }

  save(isEdit: boolean) {
    this.mainCustomerForm.markAllAsTouched();
    if (this.mainCustomerForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateMainCustomer(this.mainCustomerForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createMainCustomer(this.mainCustomerForm.getRawValue());
    }
  }

  patchMainCustomer() {
    if (this.dialogData) {
      this.mainCustomerForm.patchValue(this.dialogData);
    }
  }

  createMainCustomer(payload: any) {
    this.apiLoader = true;
    this.mainCustomerService.createMainCustomer(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Main customer created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  updateMainCustomer(payload: any, id: string) {
    this.apiLoader = true;
    this.mainCustomerService.updateMainCustomer(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Main customer updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

}
