import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemRoutingModule } from './item-routing.module';
import { AddItemComponent } from './components/add-item/add-item.component';



@NgModule({
  declarations: [
    ItemComponent,
    AddItemComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    SharedModule
  ]
})
export class ItemModule { }
