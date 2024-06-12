import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RawMaterialTypeComponent } from './raw-material-type.component';
const routes: Routes = [
    {
        path: '',
        component:RawMaterialTypeComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RawMaterialTypeRoutingModule { }