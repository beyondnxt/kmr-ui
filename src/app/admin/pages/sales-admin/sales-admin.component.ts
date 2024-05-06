import { Component } from '@angular/core';
import { AddSalesAdminComponent } from './components/add-sales-admin/add-sales-admin.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import * as data from './sales-admin.data';

@Component({
  selector: 'app-sales-admin',
  templateUrl: './sales-admin.component.html',
  styleUrls: ['./sales-admin.component.scss']
})
export class SalesAdminComponent {
  constructor(private dialog: MatDialog, private commonService: CommonService) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues;
  fixedTableHeader = data.fixedTableHeaders;
  totalCount = 0
  apiLoader = false;

  ngOnInit() {
  }

  addSalesLead() {
    this.openPopup();
  }

  test(){
    this.commonService.notification('success','test','success')
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
      }
    });
  }
}
