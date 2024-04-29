import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as data from './../../color-data'

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.scss']
})
export class AddColorComponent {
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddColorComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  applicableFor = data.applicableFor
  colorForm = this.fb.group({
    colorName: ['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    shortCode: ['',[Validators.required]],
    matchingColor: ['',[Validators.required]],
    applicableFor: ['', [Validators.required]],
  })
  save(){
    this.colorForm.markAllAsTouched();
  }
}
