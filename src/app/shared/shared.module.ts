import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from './modules/mat-module';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BodyComponent } from './components/body/body.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginComponent } from './components/login/login.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { KmrTableComponent } from './components/kmr-table/kmr-table.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    BodyComponent,
    LayoutComponent,
    SideBarComponent,
    LoginComponent,
    AreaChartComponent,
    PieChartComponent,
    DashboardCardComponent,
    BarChartComponent,
    KmrTableComponent,
    TableComponent
    
  ],
  imports: [
    CommonModule,
    MatModule,
    NgApexchartsModule
  ],
  exports: [HeaderComponent, DashboardComponent, BodyComponent, LayoutComponent,SideBarComponent, MatModule, NgApexchartsModule,AreaChartComponent,PieChartComponent,DashboardCardComponent,BarChartComponent,KmrTableComponent,TableComponent]
})
export class SharedModule { }
