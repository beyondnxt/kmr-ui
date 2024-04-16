import { Component } from '@angular/core';
import * as data from './company-data';
import { MatDialog } from '@angular/material/dialog';
import { AddCompanyComponent } from './components/add-company/add-company.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  constructor(private dialog: MatDialog,){}
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues;
  fixedTableHeader = data.fixedTableHeaders;

  addCompany(){
    this.dialog.open(AddCompanyComponent, {
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
