import { Component } from '@angular/core';
import * as data from './user-data';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(private dialog: MatDialog,) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues;
  fixedTableHeader = data.fixedTableHeaders;
  
  addUser() {
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
  this.openPopup(true)
}
openPopup(edit?:boolean){
  this.dialog.open(AddUserComponent, {
    width: '650px',
    height: 'max-content',
    data:edit,
    disableClose: true,
    panelClass: 'user-dialog-container',
  }).afterClosed().subscribe((res: any) => {
    if (res) {
      console.log(res)
    }
  });
}
}
