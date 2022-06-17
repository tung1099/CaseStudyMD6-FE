import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { UserInfoDetailComponent } from './user-info-detail/user-info-detail.component';
import { UserInfoEditComponent } from './user-info-edit/user-info-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [UserInfoDetailComponent, UserInfoEditComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProfileModule { }
