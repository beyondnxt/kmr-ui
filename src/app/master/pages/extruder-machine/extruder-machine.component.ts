import { Component } from '@angular/core';
import { AddExtruderComponent } from './components/add-extruder/add-extruder.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { MatDialog } from '@angular/material/dialog';
import * as data from './extruder.data';


@Component({
  selector: 'app-extruder-machine',
  templateUrl: './extruder-machine.component.html',
  styleUrls: ['./extruder-machine.component.scss']
})
export class ExtruderMachineComponent {
  constructor(private dialog: MatDialog,) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues
  fixedTableHeader = data.fixedTableHeaders
  addExtruder() {
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
    this.dialog.open(AddExtruderComponent, {
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
