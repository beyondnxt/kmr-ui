import { Component } from '@angular/core';
import { AddExtruderComponent } from './components/add-extruder/add-extruder.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { MatDialog } from '@angular/material/dialog';
import * as data from './extruder.data';
import { ExtruderService } from 'src/app/providers/extruder/extruder.service';
import { CommonService } from 'src/app/providers/common/common.service';
import { ExtruderHelper } from './extruder.helper';


@Component({
  selector: 'app-extruder-machine',
  templateUrl: './extruder-machine.component.html',
  styleUrls: ['./extruder-machine.component.scss'],
  providers:[ExtruderHelper]
})
export class ExtruderMachineComponent {
  constructor(private dialog: MatDialog,public commonService: CommonService, private extruderService : ExtruderService, private extruderHelper: ExtruderHelper) { }
  tableHeaders = data.tableHeaders;
  tableValues:any = []
  fixedTableHeader = data.fixedTableHeaders
  apiLoader = false
  totalCount = 0;
  ngOnInit(){
    this.getExtruder();
  }
  addExtruder() {
    this.openPopup();
  }
  delete(id:string) {
    this.dialog.open(DeleteModalComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      panelClass: 'delete-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.deleteExtruder(id);
      }
    })
  }
  edit(value:any) {
    this.openPopup(value);
  }
  openPopup(edit?: any) {
    this.dialog.open(AddExtruderComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data: edit,
      panelClass: 'color-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.getExtruder();
      }
    });
  }
  pagination(pageData: any) {
    this.getExtruder(pageData);
  }

  search(key: any) {
    this.getExtruder('', `&value=${key}`)
  }

  getExtruder(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.extruderService.getExtruder(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.extruderHelper.mapExtruder(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed','Failed to get data','fail')
      },
    })
  }

  deleteExtruder(id: string) {
    this.extruderService.deleteExtruder(id).subscribe({
      next: (res) => {
        this.getExtruder();
        this.commonService.notification('Success','Deleted Successfully','success')
      }, error: (err) => {
        this.commonService.notification('Failed','Failed to delete, please try again','fail')
      },
    })
  }


}
