import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as data from './main-customer-data';
import { AddMainCustomerComponent } from './components/add-main-customer/add-main-customer.component';

@Component({
  selector: 'app-main-customer',
  templateUrl: './main-customer.component.html',
  styleUrls: ['./main-customer.component.scss']
})
export class MainCustomerComponent {
  constructor(private dialog: MatDialog,){}
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues;
  fixedTableHeader = data.fixedTableHeaders;

  addMainCus(){
    this.dialog.open(AddMainCustomerComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      panelClass: 'company-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    });
  }
}
