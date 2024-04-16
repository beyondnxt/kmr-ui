import { Component } from '@angular/core';
import * as data from './customer-data';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  constructor(private dialog: MatDialog,) { }

  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues;
  fixedTableHeader = data.fixedTableHeaders;
  addCompany() {
    this.dialog.open(AddCustomerComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      panelClass: 'category-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    });
  }
}
