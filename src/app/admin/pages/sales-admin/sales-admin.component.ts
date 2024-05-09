import { Component } from '@angular/core';
import { AddSalesAdminComponent } from './components/add-sales-admin/add-sales-admin.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import * as data from './sales-admin.data';
import { SalesLeadService } from 'src/app/providers/sales-lead/sales-lead.service';
import { SalesLeadHelper } from './sales-lead.helper';

@Component({
  selector: 'app-sales-admin',
  templateUrl: './sales-admin.component.html',
  styleUrls: ['./sales-admin.component.scss'],
  providers:[SalesLeadHelper]
})
export class SalesAdminComponent {
  constructor(private dialog: MatDialog, private commonService: CommonService, private salesLeadService: SalesLeadService, private salesLeadHelper: SalesLeadHelper) { }
  tableHeaders = data.tableHeaders;
  tableValues :any;
  fixedTableHeader = data.fixedTableHeaders;
  totalCount = 0
  apiLoader = false;

  ngOnInit() {
    this.getSalesLead();
  }

  addSalesLead() {
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
        this.deleteSalesLead(res);
      }
    })
  }

  edit(value: any) {
    this.openPopup(value);
  }

  openPopup(edit?: any) {
    this.dialog.open(AddSalesAdminComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data: edit,
      panelClass: 'company-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.getSalesLead();
      }
    });
  }

  pagination(pageData: any) {
    this.getSalesLead(pageData);
  }

  search(key: any) {
    this.getSalesLead('', `&value=${key}`)
  }

  getSalesLead(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.salesLeadService.getSalesLead(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.salesLeadHelper.mapSalesLeads(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
        // this.commonService.showSnackbar('Data fetched successfully');
      },
      error: (err) => {
        this.commonService.notification('Failed','Failed to get data','fail')
      },
    })
  }

  deleteSalesLead(id: string) {
    this.salesLeadService.deleteSalesLead(id).subscribe({
      next: (res) => {
        this.getSalesLead();
        this.commonService.notification('Success','Deleted Successfully','success')
      }, error: (err) => {
        this.commonService.notification('Failed','Failed to delete, please try again','fail')
      },
    })
  }

}
