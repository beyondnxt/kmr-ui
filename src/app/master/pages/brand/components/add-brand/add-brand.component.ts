import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrandService } from 'src/app/providers/brand/brand.service';
import { CommonService } from 'src/app/providers/common/common.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddBrandComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private brandService: BrandService, public commonService: CommonService) { }
  brandForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    rawMaterialTypeId: ['', [Validators.required]],
    brandPriorityOrder: ['', [Validators.required]],
  })
  apiLoader = false;
  rawMaterialTypes:any = [];
  ngOnInit() {
    this.patchBrand();
    this.getAllRawMaterial();
  }

  save(isEdit: boolean) {
    this.brandForm.markAllAsTouched();
    if (this.brandForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateBrand(this.brandForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createBrand(this.brandForm.getRawValue());
    }
  }

  patchBrand() {
    if (this.dialogData) {
      this.brandForm.patchValue(this.dialogData);
    }
  }

  createBrand(payload: any) {
    this.apiLoader = true;
    this.brandService.createBrand(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Brand created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  updateBrand(payload: any, id: string) {
    this.apiLoader = true;
    this.brandService.updateBrand(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Brand updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  getAllRawMaterial() {
    this.brandService.getrawMaterialType().subscribe({
      next: (res) => {
        this.rawMaterialTypes = res.data;
      },
      error: (err) => {
      },
    });
  }
}
