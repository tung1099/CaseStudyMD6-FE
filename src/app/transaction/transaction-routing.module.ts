import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactionCreateComponent} from './transaction-create/transaction-create.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {TransactionEditComponent} from './transaction-edit/transaction-edit.component';
import {TransactionDeleteComponent} from './transaction-delete/transaction-delete.component';
import {TransactionListTodayComponent} from './transaction-list-today/transaction-list-today.component';
import {
  TransactionListTodayWalletComponent
} from './transaction-list-today-wallet/transaction-list-today-wallet.component';
import {TransacsionAllWalletComponent} from './transacsion-all-wallet/transacsion-all-wallet.component';





const routes: Routes = [
  {
    path: 'createTransaction',
    component: TransactionCreateComponent
  },
  {
    path: 'listTransaction',
    component: TransactionListComponent
  },
  {
    path: 'editTransaction/:id',
    component: TransactionEditComponent
  },
  {
    path: 'deleteTransaction/:id',
    component: TransactionDeleteComponent
  },
  {
    path: 'listTransactionToday',
    component: TransactionListTodayComponent
  },
  {
    path: 'listTransactionTodayByIdWallet/:id',
    component: TransactionListTodayWalletComponent
  },
  {
    path: 'listTransactionByIdWallet/:id',
    component: TransacsionAllWalletComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
