import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMoneyRoutingModule } from './add-money-routing.module';
import { AddMoneyComponent } from './add-money/add-money.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AddMoneyComponent],
  imports: [
    CommonModule,
    AddMoneyRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddMoneyModule { }
