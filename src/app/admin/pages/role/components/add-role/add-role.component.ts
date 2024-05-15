import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { RoleService } from 'src/app/providers/role/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddRoleComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private roleService: RoleService, public commonService: CommonService) { }
  menus = [
    {
      name: "Dashboard",
      key: "dashboard",
      checked: false
    },
    {
      name: "Admin",
      key: "admin",
      checked: false,
    },
    {
      name: "User",
      key: "user",
      checked: false,
    },
    {
      name: "Role",
      key: "role",
      checked: false,
    },
    {
      name: "Company",
      key: "company",
      checked: false,
    },
    {
      name: "Customer",
      key: "customer",
      checked: false,
    },
    {
      name: "Main Customer",
      key: "mainCustomer",
      checked: false,
    },
    {
      name: "Category",
      key: "category",
      checked: false,
    },
    {
      name: "Rope Type",
      key: "ropeType",
      checked: false,
    },
    {
      name: "Warehouse",
      key: "warehouse",
      checked: false,
    },
    {
      name: "Supplier",
      key: "supplier",
      checked: false,
    },
    {
      name: "Department",
      key: "department",
      checked: false,
    },
    {
      name: "Color",
      key: "color",
      checked: false,
    },
    {
      name: "Rope Kg Length",
      key: "ropeKgLength",
      checked: false,
    },
    {
      name: "Rope Grade",
      key: "ropeGrade",
      checked: false,
    }
  ];
  selectedMenus: any = [];
  roleForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    description: ['', [Validators.required]],
    menuItems: this.buildCheckboxes()
  })

  ngOnInit() {
    this.patchRole();
  }

  buildCheckboxes() {
    const checkboxes = this.menus.map(menu => {
      return this.fb.control(menu.checked);
    });
    return this.fb.array(checkboxes);
  }

  selectedMenu(menu: string, event: any) {
    if (event?.checked || event === 'patch') {
      this.selectedMenus.push({ [menu]: event === 'patch' ? true : event?.checked });
    } else {
      const index = this.selectedMenus.findIndex((item: {}) => Object.keys(item)[0] === menu);
      if (index !== -1) {
        this.selectedMenus[index][menu] = false;
        if (!this.selectedMenus[index][menu]) {
          this.selectedMenus.splice(index, 1);
        }
      }
    }
  }

  save(isEdit: boolean) {
    const payload = {
      name: this.roleForm.value.name,
      description: this.roleForm.value.description,
      menuAccess: this.selectedMenus
    }
    this.roleForm.markAllAsTouched();
    if (this.roleForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail');
      return;
    } else if (!this.selectedMenus.length) {
      this.commonService.notification('Failed', 'Please choose atleast one menu', 'fail');
      return;
    }
    else if (isEdit) {
      this.updateMainCustomer(payload, this.dialogData?.id)
    } else {
      this.createMainCustomer(payload);
    }
  }

  createMainCustomer(payload: any) {
    this.roleService.createRole(payload).subscribe({
      next: (res) => {
        this.commonService.notification('Success', 'Role created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.commonService.notification('Failed', 'Failed to create, please try again', 'fail')
      },
    })
  }

  get checkboxesArray() {
    return this.roleForm.get('menuItems') as FormArray;
  }

  patchRole() {
    if (this.dialogData) {
      this.roleForm.patchValue({ name: this.dialogData.name, description: this.dialogData.description });
      for (let data of this.dialogData.accessKeys) {
        this.selectedMenu(data, 'patch');
        console.log(data)
        const index = this.menus.findIndex(x => x.name === data);
        if (index !== -1) {
          this.checkboxesArray.at(index).patchValue(true);
          this.menus[index].checked = true;
        }
      }
    }
  }

  updateMainCustomer(payload: any, id: string) {
    this.roleService.updateRole(payload, id).subscribe({
      next: (res) => {
        this.commonService.notification('Success', 'Role updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

}
