import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RopeKgLengthComponent } from './rope-kg-length.component';
const routes: Routes = [
    {
        path: '',
        component:RopeKgLengthComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RopeKgLengthRoutingModule { }