import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoneytypeRoutingModule } from './moneytype-routing.module';
import {MoneytypeListComponent} from './moneytype-list/moneytype-list.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [MoneytypeListComponent],
  exports: [
    MoneytypeListComponent
  ],
  imports: [
    CommonModule,
    MoneytypeRoutingModule,
    ReactiveFormsModule
  ]
})
export class MoneytypeModule { }
