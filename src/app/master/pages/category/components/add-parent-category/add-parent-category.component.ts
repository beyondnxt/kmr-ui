import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/providers/category/category.service';
import { CommonService } from 'src/app/providers/common/common.service';

@Component({
  selector: 'app-add-parent-category',
  templateUrl: './add-parent-category.component.html',
  styleUrls: ['./add-parent-category.component.scss']
})
export class AddParentCategoryComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddParentCategoryComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private commonService: CommonService, private categoryService: CategoryService) { }
  apiLoader = false
  parentCatgoryForm = this.fb.group({
    name: ['', [Validators.required]],
  })
  ngOnInit() {
    this.patchParentCategory();
  }

  save(isEdit: boolean) {
    this.parentCatgoryForm.markAllAsTouched();
    if (this.parentCatgoryForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateParentCategory(this.parentCatgoryForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createParentCategory(this.parentCatgoryForm.getRawValue());
    }
  }

  patchParentCategory() {
    if (this.dialogData) {
      this.parentCatgoryForm.patchValue(this.dialogData);
    }
  }

  createParentCategory(payload: any) {
    this.apiLoader = true;
    this.categoryService.createParentCategory(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Parent category created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  updateParentCategory(payload: any, id: string) {
    this.apiLoader = true;
    this.categoryService.updateParentCategory(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Parent category updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }
}
