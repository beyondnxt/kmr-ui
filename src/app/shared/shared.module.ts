import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from './modules/mat-module';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BodyComponent } from './components/body/body.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    BodyComponent,
    LayoutComponent,
    SideBarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatModule
  ],
  exports: [HeaderComponent,
    DashboardComponent,
    BodyComponent,
    LayoutComponent,
    SideBarComponent]
})
export class SharedModule { }
