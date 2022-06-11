import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoneytypeListComponent} from '../moneytype/moneytype-list/moneytype-list.component';
import {IconListComponent} from './icon-list/icon-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: IconListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconRoutingModule { }
