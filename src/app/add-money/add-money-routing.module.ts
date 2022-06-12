import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddMoneyComponent} from './add-money/add-money.component';


const routes: Routes = [
  {
    path: 'add/:id',
    component: AddMoneyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMoneyRoutingModule { }
