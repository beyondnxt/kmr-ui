import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-main-customer',
  templateUrl: './add-main-customer.component.html',
  styleUrls: ['./add-main-customer.component.scss']
})
export class AddMainCustomerComponent {
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddMainCustomerComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  mainCustomerForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    code: ['', [Validators.required]],
    type: ['',[Validators.required]],
    country: ['',[Validators.required]]
  })
  save(){
    this.mainCustomerForm.markAllAsTouched();
  }
}
