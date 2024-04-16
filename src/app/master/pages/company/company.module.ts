import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompanyRoutingModule } from './company-routing.module';
import { AddCompanyComponent } from './components/add-company/add-company.component';



@NgModule({
  declarations: [
    CompanyComponent,
    AddCompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule
  ]
})
export class CompanyModule { }
