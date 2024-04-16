import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';



@NgModule({
  declarations: [
    CustomerComponent,
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
