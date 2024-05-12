import { Component } from '@angular/core';
import * as data from './role-data';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { CommonService } from 'src/app/providers/common/common.service';
import { RoleService } from 'src/app/providers/role/role.service';
import { RoleHelper } from './role-helper';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
  providers: [RoleHelper]
})
export class RoleComponent {
  constructor(private dialog: MatDialog, private roleService: RoleService, private commonService: CommonService, private roleHelper: RoleHelper) { }
  tableHeaders: any = [];
  tableValues: any = [];
  fixedTableHeader = data.fixedTableHeaders;
  apiLoader = false;
  totalCount = 0;

  ngOnInit() {
    this.getRole();
    this.getModule();
  }

  addRole() {
    this.openPopup();
  }

  delete(id: any) {
    this.dialog.open(DeleteModalComponent, {
      width: '650px',
      height: 'max-content',
      data: id,
      disableClose: true,
      panelClass: 'delete-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.deleteRole(id);
      }
    })
  }

  edit(value: any) {
    this.openPopup(value);
  }

  openPopup(edit?: any) {
    this.dialog.open(AddRoleComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data: edit,
      panelClass: 'role-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.getRole();
      }
    });
  }

  pagination(pageData: any) {
    this.getRole(pageData);
  }

  search(key: any) {
    this.getRole('', `&value=${key}`)
  }

  getRole(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.roleService.getRole(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.roleHelper.mapRoleData(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to get data', 'fail')
      },
    })
  }

  deleteRole(id: string) {
    this.roleService.deleteRole(id).subscribe({
      next: (res) => {
        this.getRole();
        this.commonService.notification('Success', 'Deleted Successfully', 'success')
      }, error: (err) => {
        this.commonService.notification('Failed', 'Failed to delete, please try again', 'fail')
      },
    })
  }

  getModule() {
    this.roleService.getModule().subscribe({
      next: (res) => {
        this.tableHeaders = res.data;
        this.tableHeaders.push({
          name: 'Action',
          key: 'action',
          sort: false,
          edit: true
        })
      }, error: (err) => {
        this.commonService.notification('Failed', 'Failed to get module, please try again', 'fail')
      }
    })
  }
}
