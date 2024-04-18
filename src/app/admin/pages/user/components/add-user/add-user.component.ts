import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  constructor(private fb: FormBuilder) { }
  userForm = this.fb.group({
    firstName: ['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    lastName: ['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    phoneNumber: ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    role: ['',[Validators.required]]
  })
}
