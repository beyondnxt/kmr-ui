import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-extruder',
  templateUrl: './add-extruder.component.html',
  styleUrls: ['./add-extruder.component.scss']
})
export class AddExtruderComponent {
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddExtruderComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  extruderForm = this.fb.group({
    machineName: ['',[Validators.required]],
    shortCode: ['',[Validators.required]],
    location: ['',[Validators.required]],
    code: ['',[Validators.required]],
    rpm: ['',[Validators.required]],
    target: ['',[Validators.required]],
    runningTime: ['',[Validators.required]],
    spindle: ['',[Validators.required]],
  })
  save(){
    this.extruderForm.markAllAsTouched();
  }
}
