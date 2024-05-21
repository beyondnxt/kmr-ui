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
      name: 'Dashboard',
      icon: 'fal fa-chart-bar',
      value: 'dashboard',
      checked: false
    },
    {
      name: 'Admin',
      icon: 'fas fa-user-lock',
      value: 'company',
      checked: false
    },
    {
      name: 'Company',
      icon: 'fas fa-building',
      value: 'company',
      checked: false
    },
    {
      name: 'Customer',
      icon: 'fas fa-users',
      value: 'customer',
      checked: false
    },
    {
      name: 'Main Customer',
      icon: 'fas fa-clipboard-user',
      value: 'main-customer',
      checked: false
    },
    {
      name: 'Category',
      icon: 'fas fa-tag',
      value: 'category',
      checked: false
    },
    {
      name: 'Rope Type',
      icon: 'fas fa-ribbon',
      value: 'rope-type',
      checked: false
    },
    {
      name: 'Warehouse',
      icon: 'fas fa-warehouse',
      value: 'warehouse',
      checked: false
    },
    {
      name: 'Department',
      icon: 'fas fa-store',
      value: 'department',
      checked: false
    },
    {
      name: 'Supplier',
      icon: 'fas fa-box-check',
      value: 'supplier',
      checked: false
    },
    {
      name: 'Color',
      icon: 'fas fa-palette fa-fw',
      value: 'color',
      checked: false
    },
    {
      name: 'Brand',
      icon: 'fas fa-award',
      value: 'brand',
      checked: false
    },
    {
      name: 'Rope KG Length',
      icon: 'fas fa-ruler-horizontal',
      value: 'rope-kg-length',
      checked: false
    },
    {
      name: 'Rope Grade',
      icon: 'fas fa-award',
      value: 'rope-grade',
      checked: false
    },
    {
      icon: 'fas fa-tasks',
      name: 'Rope Spec',
      value: 'rope-specification',
      checked: false
    },
    {
      name: 'User',
      icon: 'fal fa-user',
      value: 'user',
      checked: false
    },
    {
      name: 'Role',
      icon: 'fas fa-key',
      value: 'role',
      checked: false
    },
    {
      name: 'Sales Lead',
      icon: 'fas fa-users-cog fa-fw',
      value: 'sales-lead',
      checked: false
    },
  ]
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


  selectedMenu(event: any, isPatch: string) {
    console.log('reddd', event);

    if (event?.event?.target?.checked || isPatch === 'patch') {
      // Add or update the menu in the selectedMenus array
      const existingIndex = this.selectedMenus.findIndex((item: any) => Object.keys(item)[0] === event.menu);
      if (existingIndex !== -1) {
        console.log('reddd1', this.selectedMenus);
        this.selectedMenus[existingIndex][event.menu] = true;
      } else {
        console.log('reddd2', this.selectedMenus, existingIndex);
        this.selectedMenus.push({ [event.menu]: true });
      }
    } else {
      // Find and remove the menu from the selectedMenus array if unchecked
      const index = this.selectedMenus.findIndex((item: any) => Object.keys(item)[0] === event.menu);
      if (index !== -1) {
        this.selectedMenus.splice(index, 1);
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
        this.selectedMenu({menu:data}, 'patch');
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
