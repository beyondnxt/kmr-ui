import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRopeMachineComponent } from './components/add-rope-machine/add-rope-machine.component';
import { RopeMachineComponent } from './rope-machine.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RopeMachineRoutingModule } from './rope-machine.routing.module';



@NgModule({
  declarations: [
    RopeMachineComponent,
    AddRopeMachineComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RopeMachineRoutingModule
  ]
})
export class RopeMachineModule { }
