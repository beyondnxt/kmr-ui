import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-rope-type',
  templateUrl: './add-rope-type.component.html',
  styleUrls: ['./add-rope-type.component.scss']
})
export class AddRopeTypeComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddRopeTypeComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  ropeTypeForm = this.fb.group({
    shortCode: ['', [Validators.required]],
    ropeType: ['', [Validators.required]],
    pieceNoShortCode: ['', [Validators.required]],
  })
  save() {
    this.ropeTypeForm.markAllAsTouched();
  }
}
