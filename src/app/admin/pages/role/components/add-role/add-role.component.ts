import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent {
  constructor(private fb: FormBuilder) { }
  menus: string[] = ['Master', 'Admin', 'Sales', 'Production', 'Lead', ];
  roleForm = this.fb.group({
    roleName: ['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],

  })
}
