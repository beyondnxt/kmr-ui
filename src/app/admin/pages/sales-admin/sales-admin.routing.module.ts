import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesAdminComponent } from './sales-admin.component';
const routes: Routes = [
    {
        path: '',
        component:SalesAdminComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesAdminRoutingModule { }