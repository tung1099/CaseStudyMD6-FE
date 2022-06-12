import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {HomeComponent} from './home/home.component';


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
    path: 'money',
    loadChildren: () => import('./add-money/add-money.module').then(module => module.AddMoneyModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then(module => module.WalletModule)
  },
  {
    path: 'type',
    loadChildren: () => import('./moneytype/moneytype.module').then(module => module.MoneytypeModule)
  },
  {
    path: 'icon',
    loadChildren: () => import('./icon/icon.module').then(module => module.IconModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: UserInfoComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
