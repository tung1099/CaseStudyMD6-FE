import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserInfoEditComponent} from "../profile/user-info-edit/user-info-edit.component";
import {UserInfoDetailComponent} from "./user-info-detail/user-info-detail.component";


const routes: Routes = [
  {
    path: 'profile',
    component: UserInfoDetailComponent
  },
  {
    path: 'profile-edit',
    component: UserInfoEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
