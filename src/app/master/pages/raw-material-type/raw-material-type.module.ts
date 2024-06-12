import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RawMaterialTypeComponent } from './raw-material-type.component';
import { AddRawMaterialComponent } from './components/add-raw-material/add-raw-material.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RawMaterialTypeRoutingModule } from './raw-material-type.routing.module';



@NgModule({
  declarations: [
    RawMaterialTypeComponent,
    AddRawMaterialComponent
  ],
  imports: [
    CommonModule,
    RawMaterialTypeRoutingModule,
    SharedModule
  ]
})
export class RawMaterialTypeModule { }
