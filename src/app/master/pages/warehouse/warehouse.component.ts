import { Component } from '@angular/core';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import * as data from './warehouse-data';
import { MatDialog } from '@angular/material/dialog';
import { AddWarehouseComponent } from './components/add-warehouse/add-warehouse.component';
import { CommonService } from 'src/app/providers/common/common.service';
import { WarehouseService } from 'src/app/providers/warehouse/warehouse.service';
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehouseComponent {
  // *-----------------------------Global Variable Declaration----------------------------//
  selectedRow: any;
  tableHeaders = data.tableHeaders;
  tableValues: any;
  fixedTableHeader = data.fixedTableHeaders;
  totalCount = 0;
  apiLoader = false;
  // *---------------------------------Constructor-----------------------------------//

  constructor(
    private dialog: MatDialog,
    private _wareHouseApiService: WarehouseService,
    private commonService: CommonService
  ) {
    this.getWarehouseLists();
  }

  addWareHouse() {
    this.openPopUp({ edit: false });
  }

  edit(event: any) {
    this.selectedRow = event;
    this.selectedRow.edit = true;
    this.openPopUp(this.selectedRow);
  }

  delete(id: any) {
    this.dialog
      .open(DeleteModalComponent, {
        width: '650px',
        height: 'max-content',
        disableClose: true,
        panelClass: 'delete-dialog-container',
      })
      .afterClosed()
      .subscribe((res: any) => {
        if (res) {
          this.deleteWarehouse(id);
        }
      });
  }

  openPopUp(data: any) {
    this.dialog
      .open(AddWarehouseComponent, {
        width: '650px',
        height: 'max-content',
        data: data,
        disableClose: true,
        panelClass: 'category-dialog-container',
      })
      .afterClosed()
      .subscribe((res: any) => {
        if (res) {
          this.getWarehouseLists();
        }
      });
  }

  // *-------------------------------------API Methods------------------------------------//

  getWarehouseLists() {
    this.apiLoader = true;
    this._wareHouseApiService.getWarehouseLists().subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.tableValues = res.data;
        this.totalCount = res.totalCount;
      },
      error: (err) => {
        this.commonService.notification(
          'Failed',
          'Failed to fetch warehouse list!',
          'fail'
        );
      },
    });
  }

  deleteWarehouse(id: number) {
    this._wareHouseApiService.deleteWarehouse(id).subscribe({
      next: (res) => {
        this.commonService.notification(
          'Success',
          'Warehouse Deleted Successfully',
          'success'
        );
        this.getWarehouseLists();
      },
      error: (err) => {
        this.commonService.notification(
          'Failed',
          'Failed to delete warehouse!',
          'fail'
        );
      },
    });
  }
}
