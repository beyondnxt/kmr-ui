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
import { SearchComponent } from './components/search/search.component';
import { KmrBtnComponent } from './components/kmr-btn/kmr-btn.component';
import { FooterComponent } from './components/footer/footer.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';



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
    TableComponent,
    SearchComponent,
    KmrBtnComponent,
    FooterComponent,
    DeleteModalComponent
    
  ],
  imports: [
    CommonModule,
    MatModule,
    NgApexchartsModule,
    DragDropModule
  ],
  exports: [HeaderComponent, DashboardComponent, BodyComponent, LayoutComponent,SideBarComponent, MatModule, NgApexchartsModule,AreaChartComponent,PieChartComponent,DashboardCardComponent,BarChartComponent,KmrTableComponent,TableComponent, SearchComponent, KmrBtnComponent, FooterComponent]
})
export class SharedModule { }
