import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.scss']
})
export class AddWarehouseComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddWarehouseComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  wareHouseForm = this.fb.group({
    companyName: ['', [Validators.required]],
    location: ['', [Validators.required]],
    code: ['', [Validators.required]],
  })
  save(){
    this.wareHouseForm.markAllAsTouched();
  }
}
