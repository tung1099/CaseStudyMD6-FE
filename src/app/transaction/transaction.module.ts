import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';
import { TransactionDeleteComponent } from './transaction-delete/transaction-delete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TransactionListTodayComponent } from './transaction-list-today/transaction-list-today.component';
import { TransactionListTodayWalletComponent } from './transaction-list-today-wallet/transaction-list-today-wallet.component';
import {TransactionRoutingModule} from './transaction-routing.module';
import { TransacsionAllWalletComponent } from './transacsion-all-wallet/transacsion-all-wallet.component';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [TransactionListComponent, TransactionCreateComponent, TransactionEditComponent, TransactionDeleteComponent, TransactionListTodayComponent, TransactionListTodayWalletComponent, TransacsionAllWalletComponent],
    imports: [
        CommonModule,
        TransactionRoutingModule,
      FormsModule,
        ReactiveFormsModule,
      HttpClientModule
    ]
})
export class TransactionModule { }
