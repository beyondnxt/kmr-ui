import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-rope-grade',
  templateUrl: './add-rope-grade.component.html',
  styleUrls: ['./add-rope-grade.component.scss']
})
export class AddRopeGradeComponent {
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddRopeGradeComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  ropeGradeForm = this.fb.group({
    ropeType: ['',[Validators.required]],
    category: ['',[Validators.required]],
    grade: ['',[Validators.required]],
    rmcomb: ['',[Validators.required]],
  })
  save(){
    this.ropeGradeForm.markAllAsTouched();
  }
}
