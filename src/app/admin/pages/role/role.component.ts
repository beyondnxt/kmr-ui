import { Component } from '@angular/core';
import * as data from './role-data';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { MatDialog } from '@angular/material/dialog';
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
  addRole(){
    this.dialog.open(AddRoleComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      panelClass: 'role-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    });
  }
}
