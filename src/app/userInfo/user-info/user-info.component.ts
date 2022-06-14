import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserInfoService} from "../../service/userInfo/user-info.service";
import {UserInfo} from "../../model/user-info";
import {AuthencicationService} from "../../service/auth/authencication.service";
import Swal from "sweetalert2";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  id: number;
  userInfo: UserInfo = {};
  selectFile: File;
  imageLink;
  userInfoForm: FormGroup;
  constructor(
    private router: Router,
    private userInfoService: UserInfoService,
    private authentication: AuthencicationService,
    private sanitizer: DomSanitizer
  ) {
    this.id = this.authentication.currentUserValue.id;
    this.findByUserId(this.id);
  }

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
      })
    })
  }

  avatarForm: FormGroup = new FormGroup({
    avatar: new FormControl('')
  })





}
