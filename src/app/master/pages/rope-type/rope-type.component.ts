import { Component } from '@angular/core';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import * as data from './rope-type.data'
import { MatDialog } from '@angular/material/dialog';
import { AddRopeTypeComponent } from './components/add-rope-type/add-rope-type.component';
import { CommonService } from 'src/app/providers/common/common.service';
import { RopeTypeService } from 'src/app/providers/rope-type/rope-type.service';
import { RopeTypeHelper } from './rope-type.helper';

@Component({
  selector: 'app-rope-type',
  templateUrl: './rope-type.component.html',
  styleUrls: ['./rope-type.component.scss'],
  providers:[RopeTypeHelper]
})
export class RopeTypeComponent {
  constructor(private dialog: MatDialog,  private commonService: CommonService,private ropeTypeService: RopeTypeService , private ropeTypeHelper: RopeTypeHelper) { }
  tableHeaders = data.tableHeaders;
  tableValues:any = [];
  fixedTableHeader = data.fixedTableHeaders;
  totalCount = 0;
  apiLoader = false;

  ngOnInit() {
    this.getRopeType();
  }

  addCategory() {
    this.openPopUp(false);
  }
  edit(value:any) {
    this.openPopUp(value)
  }
  delete(id:string) {
    this.dialog.open(DeleteModalComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      panelClass: 'delete-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
      this.deleteRopeType(id)
      }
    });
  }
  openPopUp(edit: any) {
    this.dialog.open(AddRopeTypeComponent, {
      width: '650px',
      height: 'max-content',
      data: edit,
      disableClose: true,
      panelClass: 'rope-type-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.getRopeType();
      }
    });
  }

  pagination(pageData: any) {
    this.getRopeType(pageData);
  }

  search(key: any) {
    this.getRopeType('', `&value=${key}`)
  }

  getRopeType(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.ropeTypeService.getRopeType(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.ropeTypeHelper.mapRopeTypeData(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed','Failed to get data','fail')
      },
    })
  }

  deleteRopeType(id: string) {
    this.ropeTypeService.deleteRopeType(id).subscribe({
      next: (res) => {
        this.getRopeType();
        this.commonService.notification('Success','Deleted Successfully','success')
      }, error: (err) => {
        this.commonService.notification('Failed','Failed to delete, please try again','fail')
      },
    })
  }
}
