import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtruderMachineComponent } from './extruder-machine.component';

const routes: Routes = [
    {
        path: '',
        component:ExtruderMachineComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtruderRoutingModule { }