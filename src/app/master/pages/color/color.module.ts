import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorComponent } from './color.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColorRoutingModule } from './color-routing.module';



@NgModule({
  declarations: [
    ColorComponent,
    AddColorComponent
  ],
  imports: [
    CommonModule,
    ColorRoutingModule,
    SharedModule
  ]
})
export class ColorModule { }
