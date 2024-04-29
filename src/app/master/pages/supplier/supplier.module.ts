import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { AddSupplierComponent } from './components/add-supplier/add-supplier.component';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SupplierComponent,
    AddSupplierComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    SharedModule
  ]
})
export class SupplierModule { }
