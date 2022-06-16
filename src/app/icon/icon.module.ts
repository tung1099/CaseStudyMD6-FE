import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconRoutingModule } from './icon-routing.module';
import {IconListComponent} from './icon-list/icon-list.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    IconListComponent,
  ],
  imports: [
    CommonModule,
    IconRoutingModule,
    ReactiveFormsModule
  ]
})
export class IconModule { }
