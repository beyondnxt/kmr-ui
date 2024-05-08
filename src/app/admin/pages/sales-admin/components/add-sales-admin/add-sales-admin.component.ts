import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/providers/auth/auth.service';
import { CommonService } from 'src/app/providers/common/common.service';
import { SalesLeadService } from 'src/app/providers/sales-lead/sales-lead.service';

@Component({
  selector: 'app-add-sales-admin',
  templateUrl: './add-sales-admin.component.html',
  styleUrls: ['./add-sales-admin.component.scss']
})
export class AddSalesAdminComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddSalesAdminComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private commonService: CommonService, private salesLeadService: SalesLeadService) { }
  userList: any = [];

  salesLeadForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    shortCode: ['', [Validators.required]],
    userId: ['', [Validators.required]]
  })

  ngOnInit() {
    this.getUserList();
    this.patchMainCustomer();
  }

  save(isEdit: boolean) {
    if (this.salesLeadForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateMainCustomer(this.salesLeadForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createMainCustomer(this.salesLeadForm.getRawValue());
    }
  }

  patchMainCustomer() {
    if (this.dialogData) {
      this.salesLeadForm.patchValue(this.dialogData);
    }
  }

  createMainCustomer(payload: any) {
    this.salesLeadService.createSalesLead(payload).subscribe({
      next: (res) => {
        this.commonService.notification('Success', 'Sales Lead created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.commonService.notification('Failed', 'Sales Lead created successfully', 'fail')
      },
    })
  }

  updateMainCustomer(payload: any, id: string) {
    this.salesLeadService.updateSalesLead(payload, id).subscribe({
      next: (res) => {
        this.commonService.notification('Success', 'Sales Lead updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  getUserList() {
    this.salesLeadService.userList().subscribe({
      next: (res) => {
        this.userList = res.data
      },
    })
  }
}
