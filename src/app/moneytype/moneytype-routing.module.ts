import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WalletListComponent} from '../wallet/wallet-list/wallet-list.component';
import {MoneytypeListComponent} from './moneytype-list/moneytype-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: MoneytypeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoneytypeRoutingModule { }
