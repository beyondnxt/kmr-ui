import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RopeKgLengthComponent } from './rope-kg-length.component';
import { AddRopeKgLengthComponent } from './components/add-rope-kg-length/add-rope-kg-length.component';
import { RopeKgLengthRoutingModule } from './rope-kg-length.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    RopeKgLengthComponent,
    AddRopeKgLengthComponent
  ],
  imports: [
    CommonModule,
    RopeKgLengthRoutingModule,
    SharedModule
  ]
})
export class RopeKgLengthModule { }
