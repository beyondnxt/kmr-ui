import { Component } from '@angular/core';
import * as data from './company-data';
import { MatDialog } from '@angular/material/dialog';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  constructor(private dialog: MatDialog,) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues;
  fixedTableHeader = data.fixedTableHeaders;
  addCompany() {
    this.openPopUp();
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
  edit() {
  this.openPopUp(true);
  }
  openPopUp(edit?: any) {
    this.dialog.open(AddCompanyComponent, {
      width: '650px',
      height: 'max-content',
      data:edit,
      disableClose: true,
      panelClass: 'company-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    });
  }
}
