import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { WarehouseService } from 'src/app/providers/warehouse/warehouse.service';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.scss'],
})
export class AddWarehouseComponent {
  // *-------------------------------Global Variable Declaration-------------------------//
  companies: any;
  // *---------------------------------------Constructor---------------------------------//
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddWarehouseComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private _wareHouseApiService: WarehouseService,
    private commonService: CommonService
  ) {
    this.getAllCompanies();
    if(dialogData.edit){
      this.wareHouseForm.patchValue({
        companyName:dialogData.companyId,
        location:dialogData.location,
        code:dialogData.code
      })
    }
  }
  // *-----------------------------------Validation-----------------------------------//
  wareHouseForm = this.fb.group({
    companyName: ['', [Validators.required]],
    location: ['', [Validators.required]],
    code: ['', [Validators.required]],
  });

  // *--------------------------------Common Methods-----------------------------------//
  save() {
    if (this.wareHouseForm.invalid) {
      this.wareHouseForm.markAllAsTouched();
    } else {
      let data = {
        companyId: this.wareHouseForm.get('companyName')?.value,
        location: this.wareHouseForm.get('location')?.value,
        code: this.wareHouseForm.get('code')?.value,
      };
      if (!this.dialogData.edit) {
        this.insertWareHouse(data);
      } else {
        this.updateWareHouse(this.dialogData.id, data);
      }
    }
  }

  
  // *-------------------------------------API Methods------------------------------------//
  getAllCompanies() {
    this._wareHouseApiService.getAllCompanies().subscribe({
      next: (res) => {
        this.companies = res.data;
      },
      error: (err) => {
        this.commonService.notification(
          'Failed',
          'Failed to get Companies',
          'fail'
        );
      },
    });
  }

  insertWareHouse(data: any) {
    this._wareHouseApiService.insertWareHouseDetails(data).subscribe({
      next: (res) => {
        this.commonService.notification(
          'Success',
          'Warehouse Created Successfully',
          'success'
        );
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.commonService.notification('Failed', err.error.message, 'fail');
      },
    });
  }

  updateWareHouse(id: number, data: any) {
    this._wareHouseApiService.updateWareHouseDetails(id, data).subscribe({
      next: (res) => {
        this.commonService.notification(
          'Success',
          'Warehouse Updated Successfully',
          'success'
        );
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.commonService.notification('Failed', err.error.message, 'fail');
      },
    });
  }
}
