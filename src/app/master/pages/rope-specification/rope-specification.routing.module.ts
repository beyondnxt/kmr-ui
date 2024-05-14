import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RopeSpecificationComponent } from './rope-specification.component';
const routes: Routes = [
    {
        path: '',
        component:RopeSpecificationComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RopeSpecificationRoutingModule { }