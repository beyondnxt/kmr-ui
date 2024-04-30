import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-rope-kg-length',
  templateUrl: './add-rope-kg-length.component.html',
  styleUrls: ['./add-rope-kg-length.component.scss']
})
export class AddRopeKgLengthComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddRopeKgLengthComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  ropekgLengthForm = this.fb.group({
    code: ['', [Validators.required]],
    masterKg: ['', [Validators.required]],
  })
  save() {
    this.ropekgLengthForm.markAllAsTouched();
  }
}
