import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMainCustomerComponent } from './components/add-main-customer/add-main-customer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainCustomerRoutingModule } from './main-customer-routing.module';
import { MainCustomerComponent } from './main-customer.component';



@NgModule({
  declarations: [
    MainCustomerComponent,
    AddMainCustomerComponent
  ],
  imports: [
    CommonModule,
    MainCustomerRoutingModule,
    SharedModule
  ]
})
export class MainCustomerModule { }
