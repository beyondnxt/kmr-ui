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
import { AddSupplierComponent } from 'src/app/master/pages/supplier/components/add-supplier/add-supplier.component';
import { AddDepartmentComponent } from 'src/app/master/pages/department/components/add-department/add-department.component';
import { AddColorComponent } from 'src/app/master/pages/color/components/add-color/add-color.component';
import { AddBrandComponent } from 'src/app/master/pages/brand/components/add-brand/add-brand.component';
import { AddRopeKgLengthComponent } from 'src/app/master/pages/rope-kg-length/components/add-rope-kg-length/add-rope-kg-length.component';
import { AddRopeGradeComponent } from 'src/app/master/pages/rope-grade/components/add-rope-grade/add-rope-grade.component';
import { AddSalesAdminComponent } from 'src/app/admin/pages/sales-admin/components/add-sales-admin/add-sales-admin.component';
import { AddRopeSpecificationComponent } from 'src/app/master/pages/rope-specification/components/add-rope-specification/add-rope-specification.component';

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
      value: 'main-customer',
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
      value: 'rope-type',
      master: true
    },
    {
      name: 'Warehouse',
      icon: 'fas fa-warehouse',
      value: 'warehouse',
      master: true
    },
    {
      name: 'Department',
      icon: 'fas fa-store',
      value: 'department',
      master: true
    },
    {
      name: 'Supplier',
      icon: 'fas fa-box-check',
      value: 'supplier',
      master: true
    },
    {
      name: 'Color',
      icon: 'fas fa-palette fa-fw',
      value: 'color',
      master: true
    },
    {
      name: 'Brand',
      icon: 'fas fa-award',
      value: 'brand',
      master: true
    },
    {
      name: 'Rope KG Length',
      icon: 'fas fa-ruler-horizontal',
      value: 'rope-kg-length',
      master: true
    },
    {
      name: 'Rope Grade',
      icon: 'fas fa-award',
      value: 'rope-grade',
      master: true
    },
    {
      icon: 'fas fa-tasks',
      name: 'Rope Spec',
      value: 'rope-specification',
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
    {
      name: 'Sales Lead',
      icon: 'fas fa-users-cog fa-fw',
      value: 'sales-lead',
      admin: true
    },
  ]
  ngOnInit(): void {
    this.filterSelectionTypes();
    this.patchSelectionType();
  }
  filterSelectionTypes() {
    const routerUrl = this.router.url;
    if (routerUrl.startsWith('/kmr/master')) {
      this.selectionTypes = this.selectionTypes.filter((x: any) => x.master);
    } else if (routerUrl.startsWith('/kmr/admin')) {
      this.selectionTypes = this.selectionTypes.filter((x: any) => x.admin);
    }
  }
  patchSelectionType() {
    const routerUrl = this.router.url.split('/');
    if (routerUrl.length) {
      this.type.patchValue(routerUrl.pop());
    }
  }
  next(value: string): void {
    const componentMap: { [key: string]: any } = {
      'company': AddCompanyComponent,
      'customer': AddCustomerComponent,
      'main-customer': AddMainCustomerComponent,
      'category': AddCategoryComponent,
      'rope-type': AddRopeTypeComponent,
      'warehouse': AddWarehouseComponent,
      'supplier': AddSupplierComponent,
      'department': AddDepartmentComponent,
      'role': AddRoleComponent,
      'user': AddUserComponent,
      'color': AddColorComponent,
      'brand': AddBrandComponent,
      'rope-kg-length': AddRopeKgLengthComponent,
      'rope-grade': AddRopeGradeComponent,
      'sales-lead':AddSalesAdminComponent,
      'rope-specification':AddRopeSpecificationComponent
    };
    if (componentMap[value]) {
      this.dialog.open(componentMap[value], {
        width: '650px',
        height: 'max-content',
        disableClose: true,
        panelClass: `${value}-dialog-container`,
      });
    }
  }
}
// 221 - line reduced to 144 line
