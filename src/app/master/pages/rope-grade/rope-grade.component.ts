import { Component } from '@angular/core';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import * as data from './rope-grade.data'
import { MatDialog } from '@angular/material/dialog';
import { AddRopeGradeComponent } from './components/add-rope-grade/add-rope-grade.component';

@Component({
  selector: 'app-rope-grade',
  templateUrl: './rope-grade.component.html',
  styleUrls: ['./rope-grade.component.scss']
})
export class RopeGradeComponent {

  constructor(private dialog: MatDialog,) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues;
  fixedTableHeader = data.fixedTableHeaders;
  addRopeGrade() {
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
    this.dialog.open(AddRopeGradeComponent, {
      width: '650px',
      height: 'max-content',
      data: edit,
      disableClose: true,
      panelClass: 'rope-grade-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    });
  }
}
