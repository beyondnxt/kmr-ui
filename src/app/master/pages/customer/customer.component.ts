import { Component } from '@angular/core';
import * as data from './customer-data';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { CustomerService } from 'src/app/providers/customer/customer.service';
import { CommonService } from 'src/app/providers/common/common.service';
import { CustomerHelper } from './customer-helper';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [CustomerHelper]
})
export class CustomerComponent {
  constructor(private dialog: MatDialog, private commonService: CommonService, private customerService: CustomerService, private customerHelper: CustomerHelper) { }

  tableHeaders = data.tableHeaders;
  tableValues: any = [];
  fixedTableHeader = data.fixedTableHeaders;
  apiLoader = false;
  totalCount = 0;

  ngOnInit() {
    this.getCustomer();
  }

  addCompany() {
    this.openPopup();
  }
  delete(id: string) {
    this.dialog.open(DeleteModalComponent, {
      width: '650px',
      height: 'max-content',
      data:id,
      disableClose: true,
      panelClass: 'delete-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.deleteCustomer(id)
      }
    });
  }
  edit(value: any) {
    this.openPopup(value);
  }
  openPopup(edit?: any) {
    this.dialog.open(AddCustomerComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data: edit,
      panelClass: 'category-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    });
  }
  pagination(pageData: any) {
    this.getCustomer(pageData);
  }

  search(key: any) {
    this.getCustomer('', `&value=${key}`)
  }

  getCustomer(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.customerService.getCustomer(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.customerHelper.mapCustomer(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to get data', 'fail')
      },
    })
  }

  deleteCustomer(id: string) {
    this.customerService.deleteCustomer(id).subscribe({
      next: (res) => {
        this.getCustomer();
        this.commonService.notification('Success', 'Deleted Successfully', 'success')
      }, error: (err) => {
        this.commonService.notification('Failed', 'Failed to delete, please try again', 'fail')
      },
    })
  }
}
