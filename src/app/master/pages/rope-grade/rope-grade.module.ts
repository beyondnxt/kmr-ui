import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RopeGradeComponent } from './rope-grade.component';
import { AddRopeGradeComponent } from './components/add-rope-grade/add-rope-grade.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RopeTypeRoutingModule } from './rope-grade.routing.module';



@NgModule({
  declarations: [
    RopeGradeComponent,
    AddRopeGradeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RopeTypeRoutingModule
  ]
})
export class RopeGradeModule { }
