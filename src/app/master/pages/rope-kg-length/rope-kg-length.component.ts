import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import * as data from './rope-kg.data'
import { AddRopeKgLengthComponent } from './components/add-rope-kg-length/add-rope-kg-length.component';
import { RopeKgLengthService } from 'src/app/providers/rope-kg-length/rope-kg-length.service';
import { CommonService } from 'src/app/providers/common/common.service';
import { RopeKgLengthHelper } from './rope-kg-length.helper';

@Component({
  selector: 'app-rope-kg-length',
  templateUrl: './rope-kg-length.component.html',
  styleUrls: ['./rope-kg-length.component.scss'],
  providers: [RopeKgLengthHelper]
})
export class RopeKgLengthComponent {

  constructor(private dialog: MatDialog, private commonService: CommonService, private ropeKgLengthService: RopeKgLengthService, private ropeKgLengthHelper: RopeKgLengthHelper) { }
  tableHeaders = data.tableHeaders;
  tableValues :any = [];
  fixedTableHeader = data.fixedTableHeaders;
  totalCount = 0;
  apiLoader = false;

  ngOnInit(){
    this.getRopeKgLength();
  }

  addRopeKgLenth() {
    this.openPopUp();
  }
  edit(value: any) {
    this.openPopUp(value)
  }
  delete(id: string) {
    this.dialog.open(DeleteModalComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      panelClass: 'delete-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.deleteRopeKgLength(id);
      }
    });
  }
  openPopUp(edit?: any) {
    this.dialog.open(AddRopeKgLengthComponent, {
      width: '650px',
      height: 'max-content',
      data: edit,
      disableClose: true,
      panelClass: 'rope-type-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.getRopeKgLength();
      }
    });
  }

  pagination(pageData: any) {
    this.getRopeKgLength(pageData);
  }

  search(key: any) {
    this.getRopeKgLength('', `&value=${key}`)
  }

  getRopeKgLength(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.ropeKgLengthService.getRopeKgLength(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.ropeKgLengthHelper.mapRopeKgLength(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to get data', 'fail')
      },
    })
  }

  deleteRopeKgLength(id: string) {
    this.ropeKgLengthService.deleteRopeKgLength(id).subscribe({
      next: (res) => {
        this.getRopeKgLength();
        this.commonService.notification('Success', 'Deleted Successfully', 'success')
      }, error: (err) => {
        this.commonService.notification('Failed', 'Failed to delete, please try again', 'fail')
      },
    })
  }
}
