import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserInfoComponent} from './userInfo/user-info/user-info.component';
import {UserInfoEditComponent} from './userInfo/user-info-edit/user-info-edit.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {HomeComponent} from './home/home.component';
import {ShareWalletModule} from "./share-wallet/share-wallet.module";


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
    path: 'repass',
    component: ChangePasswordComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'share',
    loadChildren: () => import('./share-wallet/share-wallet.module').then(module => ShareWalletModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./charts/charts.module').then(module => module.ChartsModule)
  },
  {
    path: 'profile',
    component: UserInfoComponent
  },
  {
    path: 'profile-edit',
    component: UserInfoEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
