import { Component } from '@angular/core';
import * as data from './role-data';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {
  constructor(private dialog: MatDialog,) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues
  fixedTableHeader = data.fixedTableHeaders
  addRole() {
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
  edit(){
    this.openPopup(true);
  }
  openPopup(edit?:boolean) {
    this.dialog.open(AddRoleComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data:edit,
      panelClass: 'role-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    });
  }
}
