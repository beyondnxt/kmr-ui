import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RopeSpecificationComponent } from './rope-specification.component';
import { AddRopeSpecificationComponent } from './components/add-rope-specification/add-rope-specification.component';
import { RopeSpecificationRoutingModule } from './rope-specification.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    RopeSpecificationComponent,
    AddRopeSpecificationComponent
  ],
  imports: [
    CommonModule,
    RopeSpecificationRoutingModule,
    SharedModule
  ]
})
export class RopeSpecificationModule { }
