import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddItemComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  itemForm = this.fb.group({
    itemType:['',[Validators.required]],
    category:['',[Validators.required]],
    itemCode:['',[Validators.required]],
    strand:['',[Validators.required]],
    length:['',[Validators.required]],
    noOfTwist:['',[Validators.required]],
    twineType:['',[Validators.required]],
    treasureYarn:['',[Validators.required]],
    treasureYarnColor:['',[Validators.required]],
    itemName:['',[Validators.required]],
    itemUnit:['',[Validators.required]],
    reorderQty:['',[Validators.required]],
    locationCode:['',[Validators.required]],
    currentStock:['',[Validators.required]],
    noOfLeadDays:['',[Validators.required]],
    kpcCode:['',[Validators.required]],
    description:['',[Validators.required]],
  })
  save() {
    this.itemForm.markAllAsTouched();
  }
}
