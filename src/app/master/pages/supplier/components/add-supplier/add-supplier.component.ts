import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent {
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddSupplierComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any) { }
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
    contactNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    productName: ['', [Validators.required]],
    address: ['', [Validators.required]]
  })
  save(){
    this.supplierForm.markAllAsTouched();
  }

}
