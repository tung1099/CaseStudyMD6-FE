import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { WalletListComponent } from './wallet/wallet-list/wallet-list.component';
import { WalletCreateComponent } from './wallet/wallet-create/wallet-create.component';
import { WalletEditComponent } from './wallet/wallet-edit/wallet-edit.component';
import { WalletDeleteComponent } from './wallet/wallet-delete/wallet-delete.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { TransactionCreateComponent } from './transaction/transaction-create/transaction-create.component';
import { TransactionEditComponent } from './transaction/transaction-edit/transaction-edit.component';
import { TransactionDeleteComponent } from './transaction/transaction-delete/transaction-delete.component';
import {SharedModule} from './shared/shared.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // CategoryListComponent,
    // CategoryCreateComponent,
    // CategoryEditComponent,
    // CategoryDeleteComponent,
    // WalletListComponent,
    // WalletCreateComponent,
    // WalletEditComponent,
    // WalletDeleteComponent,
    // TransactionListComponent,
    // TransactionCreateComponent,
    // TransactionEditComponent,
    // TransactionDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
