import { Component, OnInit } from '@angular/core';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {UserInfo} from '../../model/user-info';
import {UserInfoService} from '../../service/userInfo/user-info.service';
import {Router} from '@angular/router';
import {NotificationService} from "../../service/notification/notification.service";
import {Noti} from "../../model/noti";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
idUser = 0;
userInfo: UserInfo = {};
  notifications: Noti[] = [];
  constructor(private authService: AuthencicationService,
              private userInfoService: UserInfoService,
              private notificationService: NotificationService,
              private router: Router
              ) {
    if (this.authService.currentUserValue != null) {
      this.idUser = this.authService.currentUserValue.id;
    }
    this.findByUserId(this.idUser);
  }
  ngOnInit() {
    this.findAllNotification();
  }
  findByUserId(id) {
    this.userInfoService.findByUserId(id).subscribe(profile => {
      this.userInfo = profile;
    });
  }
  logout() {
    this.router.navigate(['/login']);
    this.authService.logout();
  }
  findAllNotification() {
    this.notificationService.showAllNotificationByUserId(this.idUser).subscribe(list => {
      this.notifications = list;
    })
  }

}
