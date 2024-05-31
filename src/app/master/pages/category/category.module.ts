import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddParentCategoryComponent } from './components/add-parent-category/add-parent-category.component';
import { AddSubCategoryComponent } from './components/add-sub-category/add-sub-category.component';
import { AddChildCategoryComponent } from './components/add-child-category/add-child-category.component';



@NgModule({
  declarations: [
    CategoryComponent,
    AddCategoryComponent,
    AddParentCategoryComponent,
    AddSubCategoryComponent,
    AddChildCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
