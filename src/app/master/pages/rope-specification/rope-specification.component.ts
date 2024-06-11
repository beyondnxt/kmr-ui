import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRopeSpecificationComponent } from './components/add-rope-specification/add-rope-specification.component';
import * as data from './rope-specification.data'
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { RopeSpecificationService } from 'src/app/providers/rope-specification/rope-specification.service';
import { CommonService } from 'src/app/providers/common/common.service';
import { RopeSpecHelper } from './rope-spec.helper';

@Component({
  selector: 'app-rope-specification',
  templateUrl: './rope-specification.component.html',
  styleUrls: ['./rope-specification.component.scss'],
  providers: [RopeSpecHelper]
})
export class RopeSpecificationComponent {
  constructor(private dialog: MatDialog, public commonService: CommonService, private ropeSpecificationService: RopeSpecificationService, private ropeSpecHelper: RopeSpecHelper) { }
  tableHeaders = data.tableHeaders;
  tableValues:any = [];
  fixedTableHeader = data.fixedTableHeaders;
  apiLoader = false;
  totalCount = 0;

  ngOnInit(){
    this.getRopeSpec();
  }
  addRopeSpec() {
    this.openPopUp();
  }
  edit(value:any) {
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
        this.deleteRopeSpec(id)
      }
    });
  }
  openPopUp(edit?: any) {
    this.dialog.open(AddRopeSpecificationComponent, {
      width: '950px',
      height: 'max-content',
      data: edit,
      disableClose: true,
      panelClass: 'rope-specification-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.getRopeSpec();
      }
    });
  }
  pagination(pageData: any) {
    this.getRopeSpec(pageData);
  }
  search(key: any) {
    this.getRopeSpec('', `&value=${key}`)
  }
  getRopeSpec(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.ropeSpecificationService.getRopeSpecification(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.ropeSpecHelper.mapRopeSpec(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to get data', 'fail')
      },
    })
  }
  deleteRopeSpec(id: string) {
    this.ropeSpecificationService.deleteRopeSpecification(id).subscribe({
      next: (res) => {
        this.getRopeSpec();
        this.commonService.notification('Success', 'Deleted Successfully', 'success')
      }, error: (err) => {
        this.commonService.notification('Failed', 'Failed to delete, please try again', 'fail')
      },
    })
  }
}


