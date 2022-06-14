import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PiechartComponent} from './piechart/piechart.component';


const routes: Routes = [
  {
    path: 'chart',
    component: PiechartComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
