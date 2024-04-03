import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchComponent } from './dispatch/dispatch.component';
import { DispatchRoutingModule } from './dispatch-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DispatchComponent
  ],
  imports: [
    CommonModule,
    DispatchRoutingModule,
    SharedModule
  ]
})
export class DispatchModule { }
