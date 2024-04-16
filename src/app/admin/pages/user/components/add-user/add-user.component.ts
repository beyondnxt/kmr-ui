import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  constructor(private fb: FormBuilder) { }
  userForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    phoneNumber: [''],
    email: [''],
    role: ['']
  })
}
