import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCustomerComponent } from './main-customer.component';

const routes: Routes = [
    {
        path: '',
        component: MainCustomerComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainCustomerRoutingModule { }