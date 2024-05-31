import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/providers/category/category.service';
import { CommonService } from 'src/app/providers/common/common.service';

@Component({
  selector: 'app-add-child-category',
  templateUrl: './add-child-category.component.html',
  styleUrls: ['./add-child-category.component.scss']
})
export class AddChildCategoryComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddChildCategoryComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private commonService: CommonService, private categoryService: CategoryService) { }
  apiLoader = false;
  parentCategories: any = [];
  childCatgoryForm = this.fb.group({
    name: ['', [Validators.required]],
    parentCategoryId: ['', [Validators.required]],
  })

  ngOnInit() {
    this.patchChildCategory();
    this.getAllParentCategory();
  }

  save(isEdit: boolean) {
    this.childCatgoryForm.markAllAsTouched();
    if (this.childCatgoryForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateChildCategory(this.childCatgoryForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createChildCategory(this.childCatgoryForm.getRawValue());
    }
  }

  patchChildCategory() {
    if (this.dialogData) {
      this.childCatgoryForm.patchValue(this.dialogData);
    }
  }

  createChildCategory(payload: any) {
    this.apiLoader = true;
    this.categoryService.createChildCategory(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Child category created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  updateChildCategory(payload: any, id: string) {
    this.apiLoader = true;
    this.categoryService.updateChildCategory(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Child category updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  getAllParentCategory() {
    this.categoryService.getAllParentCategory().subscribe({
      next: (res) => {
        this.parentCategories = res.data;
      },
      error: (err) => {
      },
    });
  }
}
