import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMoneyRoutingModule } from './add-money-routing.module';
import { AddMoneyComponent } from './add-money/add-money.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddMoneyInTimeByWalletComponent } from './add-money-in-time-by-wallet/add-money-in-time-by-wallet.component';


@NgModule({
  declarations: [AddMoneyComponent, AddMoneyInTimeByWalletComponent],
  imports: [
    CommonModule,
    AddMoneyRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddMoneyModule { }
