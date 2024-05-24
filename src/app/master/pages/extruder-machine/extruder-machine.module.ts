import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtruderMachineComponent } from './extruder-machine.component';
import { AddExtruderComponent } from './components/add-extruder/add-extruder.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExtruderRoutingModule } from './extruder-machine.routing.module';



@NgModule({
  declarations: [
    ExtruderMachineComponent,
    AddExtruderComponent
  ],
  imports: [
    CommonModule,
    ExtruderRoutingModule,
    SharedModule
  ]
})
export class ExtruderMachineModule { }
