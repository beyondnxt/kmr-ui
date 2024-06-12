import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { RawMaterialService } from 'src/app/providers/raw-material/raw-material.service';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { AddRawMaterialComponent } from './components/add-raw-material/add-raw-material.component';
import * as data from './raw-material-type.data';
import { RawMaterialType } from './raw-material-type.helper';

@Component({
  selector: 'app-raw-material-type',
  templateUrl: './raw-material-type.component.html',
  styleUrls: ['./raw-material-type.component.scss'],
  providers: [RawMaterialType]
})
export class RawMaterialTypeComponent {
  constructor(private dialog: MatDialog, private rawMaterialService: RawMaterialService, public commonService: CommonService, private rawMaterialTypeHelper: RawMaterialType) { }
  tableHeaders = data.tableHeaders;
  tableValues: any = [];
  fixedTableHeader = data.fixedTableHeaders
  apiLoader = false;
  totalCount = 0;
  ngOnInit() {
    this.getRawMaterialType();
  }
  addRawMaterialType() {
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
        this.deleteRawMaterialType(id);
      }
    })
  }
  edit(value: any) {
    this.openPopup(value);
  }
  openPopup(edit?: any) {
    this.dialog.open(AddRawMaterialComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data: edit,
      panelClass: 'brand-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.getRawMaterialType();
      }
    });
  }
  pagination(pageData: any) {
    this.getRawMaterialType(pageData);
  }

  search(key: any) {
    this.getRawMaterialType('', `&value=${key}`)
  }
  getRawMaterialType(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.rawMaterialService.getRawMaterialType(query, searchQuery).subscribe({
      next: (res) => {
       this.tableValues = this.rawMaterialTypeHelper.mapRawMaterialType(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to get data', 'fail')
      },
    })
  }
  deleteRawMaterialType(id: string) {
    this.rawMaterialService.deleteRawMaterialType(id).subscribe({
      next: (res) => {
        this.getRawMaterialType();
        this.commonService.notification('Success', 'Deleted Successfully', 'success')
      }, error: (err) => {
        this.commonService.notification('Failed', 'Failed to delete, please try again', 'fail')
      },
    })
  }

}


