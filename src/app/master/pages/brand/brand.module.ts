import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { BrandRoutingModule } from './brand-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BrandComponent,
    AddBrandComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    SharedModule
  ]
})
export class BrandModule { }
