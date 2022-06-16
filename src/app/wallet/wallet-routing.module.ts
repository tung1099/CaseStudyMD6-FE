import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WalletListComponent} from './wallet-list/wallet-list.component';
import {WalletCreateComponent} from './wallet-create/wallet-create.component';
import {WalletEditComponent} from './wallet-edit/wallet-edit.component';
import {WalletDeleteComponent} from './wallet-delete/wallet-delete.component';
import {WalletDetailComponent} from './wallet-detail/wallet-detail.component';
import {MoneytypeListComponent} from '../moneytype/moneytype-list/moneytype-list.component';
import {SumMoneyComponent} from './sum-money/sum-money.component';
import {HistoryAddMoneyComponent} from './history-add-money/history-add-money.component';


const routes: Routes = [
  {
    path: 'list',
    component: WalletListComponent
  },
  {
    path: 'create/:id',
    component: WalletCreateComponent
  },
  {
    path: 'edit/:id/',
    component: WalletEditComponent
  },
  {
    path: 'delete/:id',
    component: WalletDeleteComponent
  },
  {
    path: ':id',
    component: WalletDetailComponent
  },
  {
    path: 'listType',
    component: MoneytypeListComponent
  },
  {
    path: 'sumMoney/:id',
    component: SumMoneyComponent
  },
  {
    path: 'addMoney/:id',
    component: HistoryAddMoneyComponent
  },
  {
    path: 'inOut',
    component: MoneytypeListComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
