import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'sales',
        children: [
          {
            path:'dispatch',
            loadChildren: () =>import('./sales/pages/dispatch/dispatch.module').then(m => m.DispatchModule)
          }
        ]
      },
      {
        path:'admin',
        children:[
          {
            path:'user',
            loadChildren: () =>import('./admin/pages/user/user.module').then(m => m.UserModule)
          },
          {
            path:'role',
            loadChildren: () =>import('./admin/pages/role/role.module').then(m => m.RoleModule)
          }
        ]
      },
      {
        path:'master',
        children:[
          {
            path:'company',
            loadChildren: () =>import('./master/pages/company/company.module').then(m => m.CompanyModule)
          },
          {
            path:'customer',
            loadChildren: () =>import('./master/pages/customer/customer.module').then(m => m.CustomerModule)
          },
          {
            path:'main-customer',
            loadChildren: () =>import('./master/pages/main-customer/main-customer.module').then(m => m.MainCustomerModule)
          },
          {
            path:'item',
            loadChildren: () =>import('./master/pages/item/item.module').then(m => m.ItemModule)
          },
          {
            path:'category',
            loadChildren: () =>import('./master/pages/category/category.module').then(m => m.CategoryModule)
          },
          {
            path:'rope-type',
            loadChildren: () =>import('./master/pages/rope-type/rope-type.module').then(m => m.RopeTypeModule)
          },
          {
            path:'warehouse',
            loadChildren: () =>import('./master/pages/warehouse/warehouse.module').then(m => m.WarehouseModule)
          },
          {
            path:'supplier',
            loadChildren: () =>import('./master/pages/supplier/supplier.module').then(m => m.SupplierModule)
          },
          {
            path:'department',
            loadChildren: () =>import('./master/pages/department/department.module').then(m => m.DepartmentModule)
          },
          {
            path:'color',
            loadChildren: () =>import('./master/pages/color/color.module').then(m => m.ColorModule)
          },
          {
            path:'brand',
            loadChildren: () =>import('./master/pages/brand/brand.module').then(m => m.BrandModule)
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
