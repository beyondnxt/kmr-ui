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
  activeCategory = 'Category';
  apiLoader = false;
  tableHeaders: any = data.tableHeaders;
  tableValues: any = [];
  fixedTableHeader: any = data.fixedTableHeaders; 
  fixedTableHeadersforCategory: any = data.fixedTableHeadersforCategory; 
   totalCount = 0;
  constructor(
    private categoryService: CategoryService,
    private categoryHelper: CategoryHelper,
    private commonService: CommonService,
    private dialog: MatDialog,
  ) { }
  ngOnInit(){
    this.getCategoryData();
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
      this.deleteCategory(id);
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
    this.getCategoryData();
      }
    });
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.activeCategory = tabChangeEvent.tab.textLabel;
    this.getCategoryData();
  }
  pagination(pageData: any): void {
    this.getCategoryData(pageData);
  }
  search(key: any): void {
    this.getCategoryData('', `&value=${key}`);
  }
   getCategoryData(query?: any, searchQuery?: string): void {
    this.apiLoader = true;
    const fetchCategoryData = this.getFetchCategoryMethod(query, searchQuery);
    fetchCategoryData.subscribe({
      next: (res) => {
        this.mapCategoryData(res.data);
        this.totalCount = res.totalCount;
        this.apiLoader = false;
      },
      error: () => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to get data', 'fail');
      },
    });
  }
   getFetchCategoryMethod(query?: any, searchQuery?: string) {
    switch (this.activeCategory) {
      case 'Category':
        return this.categoryService.getCategory(query, searchQuery);
      case 'Child Category':
        return this.categoryService.getChildCategory(query, searchQuery);
      case 'Parent Category':
        return this.categoryService.getParentCategory(query, searchQuery);
      case 'Sub Category':
        return this.categoryService.getSubCategory(query, searchQuery);
      default:
        throw new Error('Unknown category type');
    }
  }
   mapCategoryData(data: any): void {
    switch (this.activeCategory) {
      case 'Category':
        this.tableValues.category = this.categoryHelper.mapCategoryData(data);
        break;
      case 'Child Category':
        this.tableValues.childCategory = this.categoryHelper.mapChildCategory(data);
        break;
      case 'Parent Category':
        this.tableValues.parentCategory = this.categoryHelper.mapParentCategory(data);
        break;
      case 'Sub Category':
        this.tableValues.subCategory = this.categoryHelper.mapSubCategory(data);
        break;
      default:
        throw new Error('Unknown category type');
    }
  }
  deleteCategory(id: string): void {
    const deleteCategoryMethod = this.getDeleteCategoryMethod(id);
    deleteCategoryMethod.subscribe({
      next: () => {
        this.getCategoryData();
        this.commonService.notification('Success', 'Deleted Successfully', 'success');
      },
      error: () => {
        this.commonService.notification('Failed', 'Failed to delete, please try again', 'fail');
      },
    });
  }
   getDeleteCategoryMethod(id: string) {
    switch (this.activeCategory) {
      case 'Category':
        return this.categoryService.deleteCategory(id);
      case 'Child Category':
        return this.categoryService.deleteChildCategory(id);
      case 'Parent Category':
        return this.categoryService.deleteParentCategory(id);
      case 'Sub Category':
        return this.categoryService.deleteSubCategory(id);
      default:
        throw new Error('Unknown category type');
    }
  }
}

