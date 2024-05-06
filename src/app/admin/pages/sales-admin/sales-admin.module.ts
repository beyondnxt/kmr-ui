import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesAdminComponent } from './sales-admin.component';
import { AddSalesAdminComponent } from './components/add-sales-admin/add-sales-admin.component';
import { SalesAdminRoutingModule } from './sales-admin.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SalesAdminComponent,
    AddSalesAdminComponent
  ],
  imports: [
    CommonModule,
    SalesAdminRoutingModule,
    SharedModule
  ]
})
export class SalesAdminModule { }
