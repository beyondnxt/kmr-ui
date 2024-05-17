import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import * as data from './color-data';
import { CommonService } from 'src/app/providers/common/common.service';
import { ColorService } from 'src/app/providers/color/color.service';
import { ColorHelper } from './color.helper';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  providers: [ColorHelper]
})
export class ColorComponent {

  constructor(private dialog: MatDialog, private commonService: CommonService, private colorService: ColorService, private colorHelper: ColorHelper) { }
  tableHeaders = data.tableHeaders;
  tableValues: any = [];
  fixedTableHeader = data.fixedTableHeaders;
  totalCount = 0;
  apiLoader = false;
  
  ngOnInit() {
    this.getColor();
  }
  addColor() {
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
        this.deleteColor(id)
      }
    })
  }

  edit(value: any) {
    this.openPopup(value);
  }

  openPopup(edit?: any) {
    this.dialog.open(AddColorComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data: edit,
      panelClass: 'color-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.getColor();
      }
    });
  }

  pagination(pageData: any) {
    this.getColor(pageData);
  }

  search(key: any) {
    this.getColor('', `&value=${key}`)
  }

  getColor(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.colorService.getColor(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.colorHelper.mapColor(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to get data', 'fail')
      },
    })
  }

  deleteColor(id: string) {
    this.colorService.deleteColor(id).subscribe({
      next: (res) => {
        this.getColor();
        this.commonService.notification('Success', 'Deleted Successfully', 'success')
      }, error: (err) => {
        this.commonService.notification('Failed', 'Failed to delete, please try again', 'fail')
      },
    })
  }
}
