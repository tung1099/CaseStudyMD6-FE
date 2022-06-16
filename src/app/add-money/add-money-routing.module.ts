import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddMoneyComponent} from './add-money/add-money.component';
import {AddMoneyInTimeByWalletComponent} from './add-money-in-time-by-wallet/add-money-in-time-by-wallet.component';


const routes: Routes = [
  {
    path: 'add/:id',
    component: AddMoneyComponent
  },
  {
    path: 'history',
    component: AddMoneyInTimeByWalletComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMoneyRoutingModule { }
