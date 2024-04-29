import { Component } from '@angular/core';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import * as data from './brand-data';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {
  constructor(private dialog: MatDialog,) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues
  fixedTableHeader = data.fixedTableHeaders
  addBrand() {
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
    this.dialog.open(AddBrandComponent, {
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
