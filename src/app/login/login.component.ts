import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthencicationService} from '../service/auth/authencication.service';
import Swal from 'sweetalert2';
import {SweetAlertService} from '../service/sweetAlert/sweet-alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  constructor(private authenticationService: AuthencicationService,
              private sweetAlertService: SweetAlertService,
              private router: Router) { }
  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(() => {
      this.sweetAlertService.showNotification('success', 'Đăng nhập thành công !!!');
      this.router.navigate(['wallet/list']);
    }, () => {
      this.sweetAlertService.showNotification('error', 'Đăng nhập thất bại !!!');
    });
  }
}
