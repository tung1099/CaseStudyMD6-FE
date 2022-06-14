import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserInfoService} from "../../service/userInfo/user-info.service";
import {UserInfo} from "../../model/user-info";
import {AuthencicationService} from "../../service/auth/authencication.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

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

  avatarForm: FormGroup = new FormGroup({
    avatar: new FormControl('')
  })
  onFileSelect($event) {
    if ($event.target.files.length > 0) {
      const file = $event.target.files[0];
      this.avatarForm.get('avatar').setValue(file);
    }
  }

  setAvatar() {
    const formData =  new FormData();
    formData.append('avatar', this.avatarForm.get('avatar').value);
    this.userInfoService.setAvatar(this.id, formData).subscribe(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Cập nhật thành công!',
        showConfirmButton: false,
        timer: 1500});
    })
    this.router.navigate(['profile'])
  }





}
