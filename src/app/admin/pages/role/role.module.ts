import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoleRoutingModule } from './role-routing.module';



@NgModule({
  declarations: [
    RoleComponent,
    AddRoleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
