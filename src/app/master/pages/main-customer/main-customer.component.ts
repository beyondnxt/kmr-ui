import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as data from './main-customer-data';
import { AddMainCustomerComponent } from './components/add-main-customer/add-main-customer.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { MainCustomerService } from 'src/app/providers/main-customer/main-customer.service';
import { CommonService } from 'src/app/providers/common/common.service';
import { MainCusHelper } from './main-customer.helper';

@Component({
  selector: 'app-main-customer',
  templateUrl: './main-customer.component.html',
  styleUrls: ['./main-customer.component.scss'],
  providers: [MainCusHelper]
})
export class MainCustomerComponent {
  constructor(private dialog: MatDialog, private commonService: CommonService, private mainCustomerService: MainCustomerService, private mainCusHelper: MainCusHelper) { }
  tableHeaders = data.tableHeaders;
  tableValues: any;
  fixedTableHeader = data.fixedTableHeaders;
  totalCount = 0
  apiLoader = false;

  ngOnInit() {
    this.getMainCus();
  }

  addMainCus() {
    this.openPopup();
  }

  delete(id: string) {
    this.dialog.open(DeleteModalComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data: id,
      panelClass: 'delete-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.deleteCompany(res);
      }
    })
  }

  edit(value: any) {
    this.openPopup(value);
  }

  openPopup(edit?: any) {
    this.dialog.open(AddMainCustomerComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data: edit,
      panelClass: 'company-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.getMainCus();
      }
    });
  }

  pagination(pageData: any) {
    this.getMainCus(pageData);
  }

  search(key: any) {
    this.getMainCus('', `&value=${key}`)
  }

  getMainCus(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.mainCustomerService.getMainCustomer(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.mainCusHelper.mapMainCustomer(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
        // this.commonService.showSnackbar('Data fetched successfully');
      },
      error: (err) => {
        this.commonService.showSnackbar('Failed to get data');
      },
    })
  }

  deleteCompany(id: string) {
    this.mainCustomerService.deleteMainCustomer(id).subscribe({
      next: (res) => {
        this.getMainCus();
        this.commonService.showSnackbar('Deleted Successfully');
      }, error: (err) => {
        this.commonService.showSnackbar('Failed to delete, please try again');
      },
    })
  }

}
