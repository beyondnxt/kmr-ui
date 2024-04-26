import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RopeTypeComponent } from './rope-type.component';
import { AddRopeTypeComponent } from './components/add-rope-type/add-rope-type.component';
import { RopeTypeRoutingModule } from './rope-type-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    RopeTypeComponent,
    AddRopeTypeComponent
  ],
  imports: [
    CommonModule,
    RopeTypeRoutingModule,
    SharedModule
  ]
})
export class RopeTypeModule { }
