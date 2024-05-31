import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/providers/category/category.service';
import { CommonService } from 'src/app/providers/common/common.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss']
})
export class AddSubCategoryComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddSubCategoryComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private commonService: CommonService, private categoryService: CategoryService) { }
  apiLoader = false;
  childCategories: any = [];
  subCatgoryForm = this.fb.group({
    name: ['', [Validators.required]],
    childCategoryId: ['', [Validators.required]],
  })
  ngOnInit() {
    this.patchSubCategory();
    this.getAllChildCategory();
  }
  save(isEdit: boolean) {
    this.subCatgoryForm.markAllAsTouched();
    if (this.subCatgoryForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateSubCategory(this.subCatgoryForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createSubCategory(this.subCatgoryForm.getRawValue());
    }
  }
  patchSubCategory() {
    if (this.dialogData) {
      this.subCatgoryForm.patchValue(this.dialogData);
    }
  }
  createSubCategory(payload: any) {
    this.apiLoader = true;
    this.categoryService.createSubCategory(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Sub category created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }
  updateSubCategory(payload: any, id: string) {
    this.apiLoader = true;
    this.categoryService.updateSubCategory(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Sub category updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }
  getAllChildCategory() {
    this.categoryService.getAllChildCategory().subscribe({
      next: (res) => {
        this.childCategories = res.data;
      },
      error: (err) => {
      },
    });
  }
}

