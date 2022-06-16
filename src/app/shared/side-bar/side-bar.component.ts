import { Component, OnInit } from '@angular/core';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {UserInfo} from '../../model/user-info';
import {UserInfoService} from '../../service/userInfo/user-info.service';
import {Router} from '@angular/router';
import {Wallet} from '../../model/wallet';
import {WalletService} from '../../service/wallet/wallet.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
idUser = 0;
userInfo: UserInfo = {};
  constructor(private authService: AuthencicationService,
              private userInfoService: UserInfoService,
              private router: Router
              ) {
    if (this.authService.currentUserValue != null) {
      this.idUser = this.authService.currentUserValue.id;
    }
    this.findByUserId(this.idUser);
  }
  ngOnInit() {

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

}
