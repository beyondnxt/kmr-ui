import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/providers/category/category.service';
import { CommonService } from 'src/app/providers/common/common.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCategoryComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private commonService: CommonService, private categoryService: CategoryService) { }
  apiLoader = false;
  childCategories: any = [];
  parentCategories:any = [];
  allRopeGrade:any = [];
  allRopeType:any = [];
  subCategories:any = [];
  categoryForm  = this.fb.group({
    parentCategoryId:['',[Validators.required]],
    childCategoryId:['',[Validators.required]],
    subCategoryId:['',[Validators.required]],
    type:['',[Validators.required]],
    grade:['',[Validators.required]],
    smsCategory:[''],
  })
  ngOnInit() {
    this.patchCategory();
    this.getAllChildCategory();
    this.getAllSubCategory();
    this.getAllParentCategory();
    this.getAllRopeGrade();
    this.getAllRopeType();
  }
  save(isEdit: boolean) {
    this.categoryForm.markAllAsTouched();
    if (this.categoryForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateCategory(this.categoryForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createCategory(this.categoryForm.getRawValue());
    }
  }
  patchCategory() {
    if (this.dialogData) {
      this.categoryForm.patchValue(this.dialogData);
    }
  }
  createCategory(payload: any) {
    this.apiLoader = true;
    this.categoryService.createCategory(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Category created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }
  updateCategory(payload: any, id: string) {
    this.apiLoader = true;
    this.categoryService.updateCategory(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Category updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }
  getAllSubCategory() {
    this.categoryService.getAllSubCategory().subscribe({
      next: (res) => {
        this.subCategories = res.data;
      },
      error: (err) => {
      },
    });
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
  getAllParentCategory() {
    this.categoryService.getAllParentCategory().subscribe({
      next: (res) => {
        this.parentCategories = res.data;
      },
      error: (err) => {
      },
    });
  }
  fetchDropDownData(serviceMethod: any, successCallback: any, errorMessage: any) {
    serviceMethod().subscribe({
      next: (res: any) => {
        successCallback(res.data);
      },
      error: (err: any) => {
        this.commonService.notification('Failed', errorMessage, 'fail');
      },
    });
  }
  getAllRopeGrade() {
    this.fetchDropDownData(
      () => this.categoryService.getAllRopeGrade(),
      (data: any) => { this.allRopeGrade = data; },
      'Failed to get rope grade'
    );
  }
  getAllRopeType() {
    this.fetchDropDownData(
      () => this.categoryService.getAllRopeType(),
      (data: any) => { this.allRopeType = data; },
      'Failed to get rope type'
    );
  }
}
