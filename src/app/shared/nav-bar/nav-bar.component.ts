import { Component, OnInit } from '@angular/core';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {NotificationService} from "../../service/notification/notification.service";
import {Noti} from "../../model/noti";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  id = 0;
  notifications: Noti[] = [];
  constructor(private authenticationService: AuthencicationService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    if (this.authenticationService.currentUserValue != null) {
      this.id = this.authenticationService.currentUserValue.id;
    }
    this.findAllNotification();
  }

  findAllNotification() {
    this.notificationService.showAllNotificationByUserId(this.id).subscribe(list => {
      this.notifications = list;
    })
  }

}
