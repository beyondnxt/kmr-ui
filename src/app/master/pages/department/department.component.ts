import { Component } from '@angular/core';
import * as data from './department.data';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
  constructor(private dialog: MatDialog,) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues
  fixedTableHeader = data.fixedTableHeaders

  addDepartment() {
    this.openPopup();
  }

  delete() {
    this.dialog.open(DeleteModalComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      panelClass: 'delete-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    })
  }

  edit() {
    this.openPopup(true);
  }

  openPopup(edit?: boolean) {
    this.dialog.open(AddDepartmentComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data: edit,
      panelClass: 'role-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    });
  }
}
