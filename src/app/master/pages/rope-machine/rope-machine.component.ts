import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { RopeMachineService } from 'src/app/providers/rope-machine/rope-machine.service';
import { AddRopeMachineComponent } from './components/add-rope-machine/add-rope-machine.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import * as data from './rope-machine.data';
import { RopeMachineHelper } from './rope-machine.helper';

@Component({
  selector: 'app-rope-machine',
  templateUrl: './rope-machine.component.html',
  styleUrls: ['./rope-machine.component.scss'],
  providers: [RopeMachineHelper]
})
export class RopeMachineComponent {

  constructor(private dialog: MatDialog,public commonService: CommonService, private ropeMachineService : RopeMachineService,private ropeMachineHelper :RopeMachineHelper) { }
  tableHeaders = data.tableHeaders;
  tableValues:any = data.tableValues;
  fixedTableHeader = data.fixedTableHeaders
  apiLoader = false
  totalCount = 0;
  ngOnInit(){
    this.getRopeMachine();
  }
  addRopeMachine() {
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
        this.deletRopeMachine(id);
      }
    })
  }
  edit(value:any) {
    this.openPopup(value);
  }
  openPopup(edit?: any) {
    this.dialog.open(AddRopeMachineComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      data: edit,
      panelClass: 'color-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.getRopeMachine();
      }
    });
  }
  pagination(pageData: any) {
    this.getRopeMachine(pageData);
  }

  search(key: any) {
    this.getRopeMachine('', `&value=${key}`)
  }

  getRopeMachine(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.ropeMachineService.getRopeMachine(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.ropeMachineHelper.mapRopeMachine(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed','Failed to get data','fail')
      },
    })
  }

  deletRopeMachine(id: string) {
    this.ropeMachineService.deleteRopeMachine(id).subscribe({
      next: (res) => {
        this.getRopeMachine();
        this.commonService.notification('Success','Deleted Successfully','success')
      }, error: (err) => {
        this.commonService.notification('Failed','Failed to delete, please try again','fail')
      },
    })
  }
}
