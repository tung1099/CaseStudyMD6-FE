import { Component, OnInit } from '@angular/core';
import {UserInfo} from "../../model/user-info";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserInfoService} from "../../service/userInfo/user-info.service";
import {AuthencicationService} from "../../service/auth/authencication.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-user-info-edit',
  templateUrl: './user-info-edit.component.html',
  styleUrls: ['./user-info-edit.component.css']
})
export class UserInfoEditComponent implements OnInit {

  id: number;
  userInfo: UserInfo = {};
  userInfoForm: FormGroup;
  constructor(
    private router: Router,
    private userInfoService: UserInfoService,
    private authentication: AuthencicationService
  ) {
    this.id = this.authentication.currentUserValue.id;
  }

  ngOnInit() {
    this.findByUserId(this.id)
  }

  findByUserId(id) {
    this.userInfoService.findByUserId(id).subscribe(profile => {
      this.userInfo = profile;
      this.userInfoForm = new FormGroup({
        name: new FormControl(this.userInfo.name),
        phoneNumber: new FormControl(this.userInfo.phoneNumber),
        birthDay: new FormControl(this.userInfo.birthDay),
        address: new FormControl(this.userInfo.address)
      })
    })
  }

  update(id) {
    const formData = new FormData();
    formData.append('name', this.userInfoForm.value.name);
    formData.append('phoneNumber', this.userInfoForm.value.phoneNumber);
    formData.append('birthDay', this.userInfoForm.value.birthDay);
    formData.append('address', this.userInfoForm.value.address);
    this.userInfoService.updateProfile(id, formData).subscribe(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Đăng kí thành công!',
        showConfirmButton: false,
        timer: 1500});
      this.router.navigate(['profile-edit'])
    })
  }
}
