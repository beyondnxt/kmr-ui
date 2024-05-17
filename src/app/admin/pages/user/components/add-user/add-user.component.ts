import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/providers/auth/auth.service';
import { CommonService } from 'src/app/providers/common/common.service';
import { RoleService } from 'src/app/providers/role/role.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddUserComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, public commonService: CommonService, private authService: AuthService, private roleService: RoleService,) { }
  roles:any = [];
  departments: any;
  locations = [{ label: "Nagercoil", value: "nagercoil" }];

  ngOnInit() {
    this.patchUser();
    this.getDepartment();
    this.updateValidationField();
    this.getRole();
  }

  userForm = this.fb.group({
    userName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    fullName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    retypePassword: [''],
    location: ['', [Validators.required]],
    departmentId: ['', [Validators.required]],
    roleId: ['', [Validators.required]],
    salesLeadName: [''],
    status: [true]
  })

  save(isEdit: boolean) {
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateteUser(this.userForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createUser(this.userForm.getRawValue());
    }
  }

  patchUser() {
    if (this.dialogData) {
      this.userForm.patchValue(this.dialogData);
    }
  }

  createUser(payload: any) {
    delete payload.retypePassword;
    this.authService.createUser(payload).subscribe({
      next: (res) => {
        this.commonService.notification('Success', 'User created successfully', 'success')
        this.dialogRef.close(true);
      }, error: (err) => {
        this.commonService.notification('Failed', err.error.message, 'fail')
      },
    })
  }

  updateteUser(payload: any, id: string) {
    delete payload.password;
    delete payload.retypePassword;
    this.authService.updateUser(payload, id).subscribe({
      next: (res) => {
        this.commonService.notification('Success', 'User updated successfully', 'success')
        this.dialogRef.close(true);
      }, error: (err) => {
        console.log(err)
        this.commonService.notification('Failed', err.error.message, 'fail')
      },
    })
  }

  getDepartment() {
    this.authService.getDepartment().subscribe({
      next: (res) => {
        this.departments = res.data
      }
    })
  }

  updateValidationField() {
    const retypePasswordControl: any = this.userForm.get('retypePassword');
    const passwordControl: any = this.userForm.get('password');
    if (!this.dialogData) {
      retypePasswordControl.setValidators([Validators.required]);
      passwordControl.setValidators([Validators.required]);
    } else {
      retypePasswordControl.clearValidators();
      passwordControl.clearValidators();
    }
    retypePasswordControl.updateValueAndValidity();
    passwordControl.updateValueAndValidity();
  }

  checkPassword() {
    const password = this.userForm.get('password')?.value;
    const retypePassword: any = this.userForm.get('retypePassword')?.value;
    if (password !== retypePassword) {
      this.userForm.get('retypePassword')?.setErrors({ 'passwordMismatch': true });
      return;
    }
  }

  getRole(query?: any, searchQuery?: string) {
    this.roleService.getRole(query, searchQuery).subscribe({
      next: (res) => {
        this.roles = res.data;
      },
      error: (err) => {
        this.commonService.notification('Failed', 'Failed to get data', 'fail')
      },
    })
  }

}
