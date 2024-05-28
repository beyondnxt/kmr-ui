import { Component } from '@angular/core';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import * as data from './brand-data';
import { CommonService } from 'src/app/providers/common/common.service';
import { BrandService } from 'src/app/providers/brand/brand.service';
import { BrandHelper } from './brand.helper';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
  providers: [BrandHelper]
})
export class BrandComponent {
  constructor(private dialog: MatDialog, private brandService: BrandService, public commonService: CommonService, private brandHelper: BrandHelper) { }
  tableHeaders = data.tableHeaders;
  tableValues: any = [];
  fixedTableHeader = data.fixedTableHeaders
  apiLoader = false;
  totalCount = 0;
  ngOnInit() {
    this.getBrand();
  }
  addBrand() {
    this.openPopup();
  }
  delete(id: string) {
    this.dialog.open(DeleteModalComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      panelClass: 'delete-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.deleteBrand(id);
      }
    })
  }
  edit(value: any) {
    this.openPopup(value);
  }
  openPopup(edit?: any) {
    this.dialog.open(AddBrandComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data: edit,
      panelClass: 'brand-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.getBrand();
      }
    });
  }
  pagination(pageData: any) {
    this.getBrand(pageData);
  }

  search(key: any) {
    this.getBrand('', `&value=${key}`)
  }

  getBrand(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.brandService.getBrand(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.brandHelper.mapBrand(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to get data', 'fail')
      },
    })
  }

  deleteBrand(id: string) {
    this.brandService.deleteBrand(id).subscribe({
      next: (res) => {
        this.getBrand();
        this.commonService.notification('Success', 'Deleted Successfully', 'success')
      }, error: (err) => {
        this.commonService.notification('Failed', 'Failed to delete, please try again', 'fail')
      },
    })
  }

}


