import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent {
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddBrandComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  brandForm = this.fb.group({
    brandName: ['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    rawMaterialType: ['',[Validators.required]],
    brandPriorityOrder: ['',[Validators.required]],
  })
  save(){
    this.brandForm.markAllAsTouched();
  }
}
