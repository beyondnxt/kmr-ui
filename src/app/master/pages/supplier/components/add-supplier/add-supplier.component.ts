import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { SupplierService } from 'src/app/providers/supplier/supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent {
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddSupplierComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any, private commonService: CommonService, private supplierService: SupplierService) { }
  apiLoader = false;
  supplierForm = this.fb.group({
    name: ['', [Validators.required]],
    code: ['', [Validators.required]],
    vatTin: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    cstNo: ['', [Validators.required]],
    pan: ['', [Validators.required]],
    gstIn: ['', [Validators.required]],
    contactPerson: ['', [Validators.required]],
    termsOfPayment: ['', [Validators.required]],
    contactNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    productName: ['', [Validators.required]],
    address: ['', [Validators.required]]
  })
  ngOnInit() {
    this.patchSupplier();
  }

  save(isEdit: boolean) {
    this.supplierForm.markAllAsTouched();
    if (this.supplierForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateSupplier(this.supplierForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createSupplier(this.supplierForm.getRawValue());
    }
  }

  patchSupplier() {
    if (this.dialogData) {
      this.supplierForm.patchValue(this.dialogData);
    }
  }

  createSupplier(payload: any) {
    this.apiLoader = true;
    this.supplierService.createSupplier(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Supplier created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  updateSupplier(payload: any, id: string) {
    this.apiLoader = true;
    this.supplierService.updateSupplier(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Supplier updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

}
