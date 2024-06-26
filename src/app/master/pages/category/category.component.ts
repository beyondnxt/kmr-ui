import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as data from './category-data'
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(private dialog: MatDialog,) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues;
  fixedTableHeader = data.fixedTableHeaders;
  addCategory() {
    this.openPopUp(false);
  }
  edit() {
    this.openPopUp(true)
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
  openPopUp(edit: boolean) {
    this.dialog.open(AddCategoryComponent, {
      width: '650px',
      height: 'max-content',
      data: edit,
      disableClose: true,
      panelClass: 'category-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    });
  }
}
