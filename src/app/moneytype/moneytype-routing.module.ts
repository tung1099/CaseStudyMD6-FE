import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoneytypeListComponent} from './moneytype-list/moneytype-list.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoneytypeRoutingModule { }
