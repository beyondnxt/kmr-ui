import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as data from './category-data'
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { AddChildCategoryComponent } from './components/add-child-category/add-child-category.component';
import { AddSubCategoryComponent } from './components/add-sub-category/add-sub-category.component';
import { AddParentCategoryComponent } from './components/add-parent-category/add-parent-category.component';
import { CategoryService } from 'src/app/providers/category/category.service';
import { CommonService } from 'src/app/providers/common/common.service';
import { CategoryHelper } from './category.helper';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryHelper]
})
export class CategoryComponent {
  constructor(private dialog: MatDialog, private commonService: CommonService, private categoryService: CategoryService, private categoryHelper: CategoryHelper) { }
  tableHeaders: any = data.tableHeaders;
  tableValues: any = data.tableValues;
  fixedTableHeader: any = data.fixedTableHeaders;
  activeCategory = 'Category';
  totalCount = 0;
  apiLoader = false;

  ngOnInit() {
    this.getParentCategory();
  }
  addCategory(categoryType: string) {
    this.openPopUp('', categoryType);
  }
  edit(value: any) {
    this.openPopUp(value, this.activeCategory)
  }
  delete(id: string) {
    this.dialog.open(DeleteModalComponent, {
      width: '650px',
      height: 'max-content',
      disableClose: true,
      panelClass: 'delete-dialog-container',
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        if (this.activeCategory === 'Child Category') {
          this.deleteChildCategory(id);
          return;
        }
        this.deleteParentCategory(id);
      }
    });
  }
  openPopUp(edit: any, type: string) {
    const componentMap: { [key: string]: any } = {
      'Category': AddCategoryComponent,
      'Child Category': AddChildCategoryComponent,
      'Parent Category': AddParentCategoryComponent,
      'Sub Category': AddSubCategoryComponent,
    }
    this.dialog.open(componentMap[type], {
      width: '650px',
      height: 'max-content',
      data: edit,
      disableClose: true,
    }).afterClosed().subscribe((res: any) => {
      if (res) {
        if (type === 'Parent Category') {
          this.getParentCategory();
        } else {
        }
      }
    });
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.activeCategory = tabChangeEvent.tab.textLabel;
    if (this.activeCategory === 'Child Category') {
      this.getChildCategory()
    }
  }
  pagination(pageData: any) {
    if (this.activeCategory === 'Child Category') {
      this.getChildCategory(pageData);
      return;
    }
    this.getParentCategory(pageData);
  }


  search(key: any) {
    if (this.activeCategory === 'Child Category') {
      this.getChildCategory('',`&value=${key}`);
      return;
    }
    this.getParentCategory('',`&value=${key}`);
  }

  getParentCategory(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.categoryService.getParentCategory(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues.parentCategory = this.categoryHelper.mapParentCategory(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to get data', 'fail')
      },
    })
  }

  deleteParentCategory(id: string) {
    this.categoryService.deleteParentCategory(id).subscribe({
      next: (res) => {
        this.getParentCategory();
        this.commonService.notification('Success', 'Deleted Successfully', 'success')
      }, error: (err) => {
        this.commonService.notification('Failed', 'Failed to delete, please try again', 'fail')
      },
    })
  }

  getChildCategory(query?: any, searchQuery?: string) {
    this.apiLoader = true;
    this.categoryService.getChildCategory(query, searchQuery).subscribe({
      next: (res) => {
        this.tableValues.childCategory = this.categoryHelper.mapChildCategory(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to get data', 'fail')
      },
    })
  }

  deleteChildCategory(id: string) {
    this.categoryService.deleteChildCategory(id).subscribe({
      next: (res) => {
        this.getChildCategory();
        this.commonService.notification('Success', 'Deleted Successfully', 'success')
      }, error: (err) => {
        this.commonService.notification('Failed', 'Failed to delete, please try again', 'fail')
      },
    })
  }
}
