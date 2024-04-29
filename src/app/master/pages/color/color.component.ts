import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import * as data from './color-data';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {

  constructor(private dialog: MatDialog,) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues
  fixedTableHeader = data.fixedTableHeaders
  addColor() {
    this.openPopup(false);
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
  openPopup(edit:boolean) {
    this.dialog.open(AddColorComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data:edit,
      panelClass: 'color-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    });
  }
}
