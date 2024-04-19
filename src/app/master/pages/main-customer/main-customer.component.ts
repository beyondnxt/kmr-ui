import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as data from './main-customer-data';
import { AddMainCustomerComponent } from './components/add-main-customer/add-main-customer.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-main-customer',
  templateUrl: './main-customer.component.html',
  styleUrls: ['./main-customer.component.scss']
})
export class MainCustomerComponent {
  constructor(private dialog: MatDialog,) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues;
  fixedTableHeader = data.fixedTableHeaders;

  addMainCus() {
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
    this.dialog.open(AddMainCustomerComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data:edit,
      panelClass: 'company-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    });
  }
}
