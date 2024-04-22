import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCategoryComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  categoryForm  = this.fb.group({
    parentCategory:['',[Validators.required]],
    categoryName:['',[Validators.required]],
    categoryCode:['',[Validators.required]],
    type:['',[Validators.required]],
    grade:['',[Validators.required]],
    smsCategory:['',[Validators.required]],
  })
  save(){
    this.categoryForm.markAllAsTouched();
  }
}
