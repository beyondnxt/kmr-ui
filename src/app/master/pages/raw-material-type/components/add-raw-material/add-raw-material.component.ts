import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrandService } from 'src/app/providers/brand/brand.service';
import { CommonService } from 'src/app/providers/common/common.service';
import { AddBrandComponent } from '../../../brand/components/add-brand/add-brand.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-raw-material',
  templateUrl: './add-raw-material.component.html',
  styleUrls: ['./add-raw-material.component.scss']
})
export class AddRawMaterialComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddBrandComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any,  private brandService: BrandService, public commonService: CommonService,) { }
  rawMaterialForm = this.fb.group({
    name: ['', [Validators.required]],
  })
  apiLoader = false;
  rawMaterialTypes:any = [];
  ngOnInit() {
    this.patchRawMaterialType();
  }

  save(isEdit: boolean) {
    this.rawMaterialForm.markAllAsTouched();
    if (this.rawMaterialForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateRawMaterialType(this.rawMaterialForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createRawMaterialType(this.rawMaterialForm.getRawValue());
    }
  }
  patchRawMaterialType() {
    if (this.dialogData) {
      this.rawMaterialForm.patchValue(this.dialogData);
    }
  }
  createRawMaterialType(payload: any) {
    this.apiLoader = true;
    this.brandService.createBrand(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Raw material type created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  updateRawMaterialType(payload: any, id: string) {
    this.apiLoader = true;
    this.brandService.updateBrand(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Raw material type updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

}
