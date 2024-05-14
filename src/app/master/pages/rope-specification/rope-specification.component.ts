import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRopeSpecificationComponent } from './components/add-rope-specification/add-rope-specification.component';
import * as data from './rope-specification.data'
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-rope-specification',
  templateUrl: './rope-specification.component.html',
  styleUrls: ['./rope-specification.component.scss']
})
export class RopeSpecificationComponent {
  constructor(private dialog: MatDialog) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues;
  fixedTableHeader = data.fixedTableHeaders;

  addRopeSpec(){
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
    this.dialog.open(AddRopeSpecificationComponent, {
      width: '950px',
      height: 'max-content',
      data: edit,
      disableClose: true,
      panelClass: 'rope-specification-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    });
  }
}
