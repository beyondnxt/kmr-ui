import { Component } from '@angular/core';
import * as data from './company-data';
import { MatDialog } from '@angular/material/dialog';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { CompanyService } from 'src/app/providers/company/company.service';
import { companyHelper } from './company.helper';
import { CommonService } from 'src/app/providers/common/common.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  providers: [companyHelper]
})
export class CompanyComponent {
  constructor(private dialog: MatDialog, private companyService: CompanyService, private companyHelper: companyHelper, public commonService: CommonService) { }
  tableHeaders = data.tableHeaders;
  tableValues: any;
  totalCount = 0;
  fixedTableHeader = data.fixedTableHeaders;

  ngOnInit() {
    this.getCompany();
  }

  addCompany() {
    this.openPopUp(false);
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
    });
  }

  edit(value: any) {
    this.openPopUp(value);
  }

  openPopUp(edit: any) {
    this.dialog.open(AddCompanyComponent, {
      width: '650px',
      height: 'max-content',
      data: edit,
      disableClose: true,
      panelClass: 'company-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
        if (res.isEdit) {
          this.updateCompany(res.formData, res.id);
          return
        }
        this.creatCompany(res.formData);
      }
    });
  }

  creatCompany(payload: any) {
    this.companyService.createCompany(payload).subscribe({
      next: (res) => {
        this.getCompany();
        this.commonService.showSnackbar('Company created successfully');
      },
      error: (err) => {
        this.commonService.showSnackbar('Failed to create, please try again');
      },
    })
  }

  updateCompany(payload: any, id: string) {
    this.companyService.updateCompany(payload, id).subscribe({
      next: (res) => {
        this.getCompany();
        this.commonService.showSnackbar('Company updated successfully');
      },
      error: (err) => {
        this.commonService.showSnackbar('Failed to update, please try again');
      },
    })
  }

  deleteCompany(id: string) {
    this.companyService.deleteCompany(id).subscribe({
      next: (res) => {
        this.getCompany();
        this.commonService.showSnackbar('Deleted Successfully');
      }, error: (err) => {
        this.commonService.showSnackbar('Failed to delete, please try again');
      },
    })
  }

  search(key: any) {
    this.getCompany('', `&value=${key}`)
  }

  getCompany(query?: any,searchKey?:string) {
    this.companyService.getCompany(query,searchKey).subscribe({
      next: (res) => {
        this.tableValues = this.companyHelper.mapCompanyData(res.data);
        this.totalCount = res.totalCount;
        // this.commonService.showSnackbar('Data fetched successfully');
      },
      error: (err) => {
        this.commonService.showSnackbar('Failed to get data');
      },
    })
  }

  pagination(pageData: any) {
    this.getCompany(pageData);
  }
}
