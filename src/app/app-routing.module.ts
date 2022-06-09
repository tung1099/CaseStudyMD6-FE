import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then(module => module.TransactionModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then(module => module.WalletModule)
  },
  {
    path: 'type',
    loadChildren: () => import('./moneytype/moneytype.module').then(module => module.MoneytypeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
