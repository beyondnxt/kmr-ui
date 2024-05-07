import { Component } from '@angular/core';
import * as data from './department.data';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { CommonService } from 'src/app/providers/common/common.service';
import { DepartmentService } from 'src/app/providers/department/department.service';
import { DepartmentHelper } from './department.helper';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  providers: [DepartmentHelper]
})
export class DepartmentComponent {
  constructor(private dialog: MatDialog, private departmentService: DepartmentService, private commonService: CommonService, private departmentHelper: DepartmentHelper) { }
  tableHeaders = data.tableHeaders;
  tableValues: any;
  fixedTableHeader = data.fixedTableHeaders
  apiLoader = false;
  totalCount = 0;

  ngOnInit() {
    this.getDepartment();
  }

  addDepartment() {
    this.openPopup();
  }

  delete(id: string) {
    this.dialog.open(DeleteModalComponent, {
      width: '650px',
      height: 'max-content',
      data: id,
      disableClose: true,
      panelClass: 'delete-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.deleteDepartment(res);
      }
    })
  }

  edit(value: any) {
    this.openPopup(value);
  }

  openPopup(edit?: any) {
    this.dialog.open(AddDepartmentComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data: edit,
      panelClass: 'role-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
       this.getDepartment();
      }
    });
  }

  search(key: any) {
    this.getDepartment('', `&value=${key}`)
  }

  getDepartment(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.departmentService.getDepartment(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.departmentHelper.mapDepartmentData(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.commonService.notification('Failed', 'Failed to get data', 'fail')
      },
    })
  }

  pagination(pageData: any) {
    this.getDepartment(pageData);
  }


  deleteDepartment(id: string) {
    this.departmentService.deleteDepartment(id).subscribe({
      next: (res) => {
        this.getDepartment();
        this.commonService.notification('Success','Deleted Successfully','success')
      }, error: (err) => {
        this.commonService.notification('Failed','Failed to delete, please try again','fail')
      },
    })
  }
}
