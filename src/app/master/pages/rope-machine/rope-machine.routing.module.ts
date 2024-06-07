import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RopeMachineComponent } from './rope-machine.component';

const routes: Routes = [
    {
        path: '',
        component:RopeMachineComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RopeMachineRoutingModule { }