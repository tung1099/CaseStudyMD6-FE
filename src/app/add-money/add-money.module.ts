import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMoneyRoutingModule } from './add-money-routing.module';
import { AddMoneyComponent } from './add-money/add-money.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddMoneyInTimeByWalletComponent } from './add-money-in-time-by-wallet/add-money-in-time-by-wallet.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
    declarations: [AddMoneyComponent, AddMoneyInTimeByWalletComponent],
    exports: [
        AddMoneyInTimeByWalletComponent
    ],
    imports: [
        CommonModule,
        AddMoneyRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class AddMoneyModule { }
