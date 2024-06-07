import { Component } from '@angular/core';
import { AddItemComponent } from './components/add-item/add-item.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { MatDialog } from '@angular/material/dialog';
import * as data from './item.data'
import { CommonService } from 'src/app/providers/common/common.service';
import { ItemService } from 'src/app/providers/item/item.service';
import { ItemHelper } from './item.helper';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [ItemHelper]
})
export class ItemComponent {
  constructor(private dialog: MatDialog, private commonService: CommonService, private itemService: ItemService, private itemHelper: ItemHelper) { }
  tableHeaders = data.tableHeaders;
  tableValues = data.tableValues;
  fixedTableHeader = data.fixedTableHeaders;
  apiLoader = false;
  totalCount = 0;
  addItem(){
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
    this.dialog.open(AddItemComponent, {
      width: '950px',
      height: 'max-content',
      data: edit,
      disableClose: true,
      panelClass: 'rope-specification-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        console.log(res)
      }
    });
  }
  pagination(pageData: any) {
    this.getItem(pageData);
  }

  search(key: any) {
    this.getItem('', `&value=${key}`)
  }

  getItem(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.itemService.getItem(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.itemHelper.mapItem(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed','Failed to get data','fail')
      },
    })
  }

  deleteItem(id: string) {
    this.itemService.deleteItem(id).subscribe({
      next: (res) => {
        this.getItem();
        this.commonService.notification('Success','Deleted Successfully','success')
      }, error: (err) => {
        this.commonService.notification('Failed','Failed to delete, please try again','fail')
      },
    })
  }

}
