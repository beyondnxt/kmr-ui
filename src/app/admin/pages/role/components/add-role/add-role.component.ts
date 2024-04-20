import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddRoleComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  menus = [{ name: 'Master', checked: true },{ name: 'Admin', checked: false },{ name: 'Sales', checked: false }];
  roleForm = this.fb.group({
    roleName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
  })
  save() {
    this.roleForm.markAllAsTouched();
  }
}
