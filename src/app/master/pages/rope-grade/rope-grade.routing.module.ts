import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RopeGradeComponent } from './rope-grade.component';
const routes: Routes = [
    {
        path: '',
        component:RopeGradeComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RopeTypeRoutingModule { }