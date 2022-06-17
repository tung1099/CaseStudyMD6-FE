import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserInfoService} from "../../service/userInfo/user-info.service";
import {AuthencicationService} from "../../service/auth/authencication.service";
import {DomSanitizer} from "@angular/platform-browser";
import {UserInfo} from "../../model/user-info";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-info-detail',
  templateUrl: './user-info-detail.component.html',
  styleUrls: ['./user-info-detail.component.css']
})
export class UserInfoDetailComponent implements OnInit {
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
      })
    })
  }

}
