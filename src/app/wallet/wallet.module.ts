import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';
import { WalletEditComponent } from './wallet-edit/wallet-edit.component';
import { WalletDeleteComponent } from './wallet-delete/wallet-delete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WalletDetailComponent } from './wallet-detail/wallet-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {MoneytypeListComponent} from '../moneytype/moneytype-list/moneytype-list.component';


@NgModule({
  declarations: [
    WalletListComponent,
    WalletCreateComponent,
    WalletEditComponent,
    WalletDeleteComponent,
    WalletDetailComponent,
    MoneytypeListComponent
  ],
  exports: [
    WalletListComponent
  ],
    imports: [
        CommonModule,
        WalletRoutingModule,
        ReactiveFormsModule,
      HttpClientModule,
      FormsModule
    ]
})
export class WalletModule { }
