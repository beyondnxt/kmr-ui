import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RopeTypeComponent } from './rope-type.component';
const routes: Routes = [
    {
        path: '',
        component:RopeTypeComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RopeTypeRoutingModule { }