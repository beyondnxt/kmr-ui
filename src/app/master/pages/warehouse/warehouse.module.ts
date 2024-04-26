import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseComponent } from './warehouse.component';
import { AddWarehouseComponent } from './components/add-warehouse/add-warehouse.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WareHouseRoutingModule } from './warehouse-routing.module';



@NgModule({
  declarations: [
    WarehouseComponent,
    AddWarehouseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WareHouseRoutingModule
  ]
})
export class WarehouseModule { }
