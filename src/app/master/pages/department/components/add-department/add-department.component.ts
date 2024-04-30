import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent {
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddDepartmentComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  types = [{ name: 'Mono Filament', checked: true },{ name: 'Multi Filament', checked: false },{ name: 'Knitting', checked: false },{ name: 'Processing', checked: false }];
  departMentForm = this.fb.group({
    departmentName: ['', [Validators.required]],
    location: ['', [Validators.required]],
    type: ['', [Validators.required]],
  })
  save(){
    this.departMentForm.markAllAsTouched();
  }
}
