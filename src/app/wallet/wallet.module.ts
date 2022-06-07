import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';
import { WalletEditComponent } from './wallet-edit/wallet-edit.component';
import { WalletDeleteComponent } from './wallet-delete/wallet-delete.component';


@NgModule({
  declarations: [WalletListComponent, WalletCreateComponent, WalletEditComponent, WalletDeleteComponent],
  imports: [
    CommonModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
