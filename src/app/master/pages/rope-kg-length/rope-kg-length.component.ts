import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import * as data from './rope-kg.data'
import { AddRopeKgLengthComponent } from './components/add-rope-kg-length/add-rope-kg-length.component';

@Component({
  selector: 'app-rope-kg-length',
  templateUrl: './rope-kg-length.component.html',
  styleUrls: ['./rope-kg-length.component.scss']
})
export class RopeKgLengthComponent {

  constructor(private dialog: MatDialog,) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues;
  fixedTableHeader = data.fixedTableHeaders;
  addRopeKgLenth() {
    this.openPopUp(false);
  }
  edit() {
    this.openPopUp(true)
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
    });
  }
  openPopUp(edit: boolean) {
    this.dialog.open(AddRopeKgLengthComponent, {
      width: '650px',
      height: 'max-content',
      data: edit,
      disableClose: true,
      panelClass: 'rope-type-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    });
  }
}
