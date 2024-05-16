import { Component } from '@angular/core';
import * as data from './supplier.data'
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { AddSupplierComponent } from './components/add-supplier/add-supplier.component';
import { SupplierService } from 'src/app/providers/supplier/supplier.service';
import { CommonService } from 'src/app/providers/common/common.service';
import { SuuplierHelper } from './supplier.helper';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
  providers:[SuuplierHelper]
})
export class SupplierComponent {
  constructor(private dialog: MatDialog,private commonService: CommonService, private supplierService: SupplierService, private supplierHelper: SuuplierHelper) { }
  tableHeaders = data.tableHeaders;
  tableValues:any = [];
  fixedTableHeader = data.fixedTableHeaders;
  apiLoader = false;
  totalCount = 0;

  ngOnInit(){
    this.getSupplier();
  }

  addSupplier(){
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
       this.deleteSupplier(id);
      }
    });
  }
  openPopUp(edit: any) {
    this.dialog.open(AddSupplierComponent, {
      width: '650px',
      height: 'max-content',
      data: edit,
      disableClose: true,
      panelClass: 'supplier-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        this.getSupplier();
      }
    });
  }
  
  pagination(pageData: any) {
    this.getSupplier(pageData);
  }

  search(key: any) {
    this.getSupplier('', `&value=${key}`)
  }

  getSupplier(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.supplierService.getSupplier(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues = this.supplierHelper.mapSupplier(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed','Failed to get data','fail')
      },
    })
  }

  deleteSupplier(id: string) {
    this.supplierService.deleteSupplier(id).subscribe({
      next: (res) => {
        this.getSupplier();
        this.commonService.notification('Success','Deleted Successfully','success')
      }, error: (err) => {
        this.commonService.notification('Failed','Failed to delete, please try again','fail')
      },
    })
  }
}
