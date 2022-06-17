import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserInfoService} from "../../service/userInfo/user-info.service";
import {AuthencicationService} from "../../service/auth/authencication.service";
import {DomSanitizer} from "@angular/platform-browser";
import {UserInfo} from "../../model/user-info";
import {FormControl, FormGroup} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-user-info-edit',
  templateUrl: './user-info-edit.component.html',
  styleUrls: ['./user-info-edit.component.css']
})
export class UserInfoEditComponent implements OnInit {
  constructor(
    private router: Router,
    private userInfoService: UserInfoService,
    private authentication: AuthencicationService,
    private sanitizer: DomSanitizer
  ) {
    this.id = this.authentication.currentUserValue.id;
    this.findByUserId(this.id);
  }
  id: number;
  userInfo: UserInfo = {};
  selectFile: File;
  imageLink;
  userInfoForm: FormGroup;
  avatarForm: FormGroup = new FormGroup({
    avatar: new FormControl('')
  });

  ngOnInit() {

  }

  findByUserId(id) {
    this.userInfoService.findByUserId(id).subscribe(profile => {
      this.userInfo = profile;
      this.imageLink = 'http://localhost:8080/image/' + this.userInfo.avatar;
      this.userInfoForm = new FormGroup({
        name: new FormControl(this.userInfo.name),
        phoneNumber: new FormControl(this.userInfo.phoneNumber),
        birthDay: new FormControl(this.userInfo.birthDay),
        address: new FormControl(this.userInfo.address)
      });
    });
  }

  update() {
    const formData = new FormData();
    formData.append('name', this.userInfoForm.value.name);
    formData.append('phoneNumber', this.userInfoForm.value.phoneNumber);
    formData.append('birthDay', this.userInfoForm.value.birthDay);
    formData.append('address', this.userInfoForm.value.address);
    this.userInfoService.updateProfile(this.id, formData).subscribe(() => {
      this.router.navigate(['profile']);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Thành công!',
        showConfirmButton: false,
        timer: 1500});

    });
  }
  onFileSelect($event) {
    if ($event.target.files.length > 0) {
      this.selectFile = $event.target.files[0];
      // this.avatarForm.get('avatar').setValue(this.selectFile);
      this.imageLink = URL.createObjectURL(this.selectFile);
    }
  }
  setAvatar() {
    const formData =  new FormData();
    formData.append('avatar', this.selectFile);
    this.userInfoService.setAvatar(this.id, formData).subscribe(() => {
      this.router.navigate(['profile']);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Cập nhật thành công!',
        showConfirmButton: false,
        timer: 1500});
    });
  }
}
