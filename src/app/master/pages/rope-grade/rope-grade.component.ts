import { Component } from '@angular/core';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import * as data from './rope-grade.data'
import { MatDialog } from '@angular/material/dialog';
import { AddRopeGradeComponent } from './components/add-rope-grade/add-rope-grade.component';
import { RopeGradeService } from 'src/app/providers/rope-grade/rope-grade.service';
import { CommonService } from 'src/app/providers/common/common.service';
import { RopeGradeHelper } from './rope-grade.helper';

@Component({
  selector: 'app-rope-grade',
  templateUrl: './rope-grade.component.html',
  styleUrls: ['./rope-grade.component.scss'],
  providers:[RopeGradeHelper]
})
export class RopeGradeComponent {

  constructor(private dialog: MatDialog, private commonService: CommonService, private ropeGradeService: RopeGradeService, private ropeGradeHelper: RopeGradeHelper) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues;
  fixedTableHeader = data.fixedTableHeaders;
  totalCount = 0;
  apiLoader = false;

  ngOnInit(){
    this.getRopeGrade();
  }
  addRopeGrade() {
    this.openPopUp();
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
        this.deleteRopeGrade(id);
      }
    });
  }
  openPopUp(edit?: any) {
    this.dialog.open(AddRopeGradeComponent, {
      width: '650px',
      height: 'max-content',
      data: edit,
      disableClose: true,
      panelClass: 'rope-grade-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
       this.getRopeGrade();
      }
    });
  }

  pagination(pageData: any) {
    this.getRopeGrade(pageData);
  }

  search(key: any) {
    this.getRopeGrade('', `&value=${key}`)
  }

  getRopeGrade(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.ropeGradeService.getRopeGrade(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.ropeGradeHelper.mapRopeGrade(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed','Failed to get data','fail')
      },
    })
  }

  deleteRopeGrade(id: string) {
    this.ropeGradeService.deleteRopeGrade(id).subscribe({
      next: (res) => {
        this.getRopeGrade();
        this.commonService.notification('Success','Deleted Successfully','success')
      }, error: (err) => {
        this.commonService.notification('Failed','Failed to delete, please try again','fail')
      },
    })
  }
}
