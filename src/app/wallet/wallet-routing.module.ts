import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryListComponent} from '../category/category-list/category-list.component';
import {WalletListComponent} from './wallet-list/wallet-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: WalletListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
