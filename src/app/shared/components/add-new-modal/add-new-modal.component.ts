import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddWarehouseComponent } from 'src/app/master/pages/warehouse/components/add-warehouse/add-warehouse.component';
import { AddCustomerComponent } from 'src/app/master/pages/customer/components/add-customer/add-customer.component';
import { AddCompanyComponent } from 'src/app/master/pages/company/components/add-company/add-company.component';
import { AddMainCustomerComponent } from 'src/app/master/pages/main-customer/components/add-main-customer/add-main-customer.component';
import { Component } from '@angular/core';
import { AddCategoryComponent } from 'src/app/master/pages/category/components/add-category/add-category.component';
import { AddRopeTypeComponent } from 'src/app/master/pages/rope-type/components/add-rope-type/add-rope-type.component';
import { Router } from '@angular/router';
import { AddRoleComponent } from 'src/app/admin/pages/role/components/add-role/add-role.component';
import { AddUserComponent } from 'src/app/admin/pages/user/components/add-user/add-user.component';

@Component({
  selector: 'app-add-new-modal',
  templateUrl: './add-new-modal.component.html',
  styleUrls: ['./add-new-modal.component.scss']
})
export class AddNewModalComponent {
  constructor(private dialog: MatDialog, private router: Router,) { }

  type = new FormControl();
  selectionTypes = [
    {
      name: 'Company',
      icon: 'fas fa-building',
      value: 'company',
      master: true
    },
    {
      name: 'Customer',
      icon: 'fas fa-users',
      value: 'customer',
      master: true
    },
    {
      name: 'Main Customer',
      icon: 'fas fa-clipboard-user',
      value: 'mainCustomer',
      master: true
    },
    {
      name: 'Category',
      icon: 'fas fa-tag',
      value: 'category',
      master: true
    },
    {
      name: 'Rope Type',
      icon: 'fas fa-ribbon',
      value: 'ropeType',
      master: true
    },
    {
      name: 'Warehouse',
      icon: 'fas fa-warehouse',
      value: 'warehouse',
      master: true
    },
    {
      name: 'User',
      icon: 'fal fa-user',
      value: 'user',
      admin: true
    },
    {
      name: 'Role',
      icon: 'fas fa-key',
      value: 'role',
      admin: true
    },
  ]
  ngOnInit(): void {
    this.filterSelectionTypes();
  }
  filterSelectionTypes() {
    const routerUrl = this.router.url;
    if (routerUrl.startsWith('/master')) {
      this.selectionTypes = this.selectionTypes.filter((x: any) => x.master);
    } else if (routerUrl.startsWith('/admin')) {
      this.selectionTypes = this.selectionTypes.filter((x: any) => x.admin);
    }
  }
  next(value: string): void {
    switch (value) {
      case 'company':
        this.dialog.open(AddCompanyComponent, {
          width: '650px',
          height: 'max-content',
          disableClose: true,
          panelClass: 'company-dialog-container',
        })
        break;
      case 'customer':
        this.dialog.open(AddCustomerComponent, {
          width: '650px',
          height: 'max-content',
          disableClose: true,
          panelClass: 'customer-dialog-container',
        })
        break;
      case 'mainCustomer':
        this.dialog.open(AddMainCustomerComponent, {
          width: '650px',
          height: 'max-content',
          disableClose: true,
          panelClass: 'main-customer-dialog-container',
        })
        break;
      case 'category':
        this.dialog.open(AddCategoryComponent, {
          width: '650px',
          height: 'max-content',
          disableClose: true,
          panelClass: 'category-dialog-container',
        })
        break;
      case 'ropeType':
        this.dialog.open(AddRopeTypeComponent, {
          width: '650px',
          height: 'max-content',
          disableClose: true,
          panelClass: 'rope-type-dialog-container',
        })
        break;
      case 'warehouse':
        this.dialog.open(AddWarehouseComponent, {
          width: '650px',
          height: 'max-content',
          disableClose: true,
          panelClass: 'warehouse-dialog-container',
        })
        break;
      case 'role':
        this.dialog.open(AddRoleComponent, {
          width: '650px',
          height: 'max-content',
          disableClose: true,
          panelClass: 'role-dialog-container',
        })
        break;
      case 'user':
        this.dialog.open(AddUserComponent, {
          width: '650px',
          height: 'max-content',
          disableClose: true,
          panelClass: 'warehouse-dialog-container',
        })
        break;
    }

  }
}
