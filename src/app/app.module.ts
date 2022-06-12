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
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { IconListComponent } from './icon/icon-list/icon-list.component';
import {JwtInterceptor} from './helper/jwt-interceptor';
import {ErrorInterceptor} from './helper/error-interceptor';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserInfoComponent } from './userInfo/user-info/user-info.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserInfoEditComponent } from './userInfo/user-info-edit/user-info-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    // IconListComponent,
    LoginComponent,
    RegisterComponent,
    UserInfoComponent,
    ChangePasswordComponent,
    UserInfoEditComponent,
    // TransactionCreateComponent,
    // TransactionListComponent,
    // TransactionDeleteComponent,
    // TransactionEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
