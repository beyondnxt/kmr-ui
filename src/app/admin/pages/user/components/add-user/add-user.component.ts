import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddUserComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  userForm = this.fb.group({
    firstName: ['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    lastName: ['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    phoneNumber: ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    role: ['',[Validators.required]]
  })
  save(){
    this.userForm.markAllAsTouched();
  }
}
