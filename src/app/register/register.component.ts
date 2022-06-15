import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthencicationService} from '../service/auth/authencication.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

import {
  addMonths, addYears, differenceInDays, differenceInMonths, differenceInYears, differenceInHours,
  differenceInMinutes, differenceInSeconds
} from 'date-fns';
import {SweetAlertService} from '../service/sweetAlert/sweet-alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  checkDay: boolean;
  checkUser: boolean;
  submitted = false;
  today: Date;
  username: string;
  birthday: Date;
  regexUsername = '^A-Za-z0-9 \\S||@||\\.||_';

  signUpForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.maxLength(32), Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern(this.regexUsername)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('(0)[0-9]{9,10}')]),
    birthDay: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.pattern(this.regexUsername)]),
  });

  constructor(private authenticationService: AuthencicationService,
              private sweetAlertService: SweetAlertService,
              private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    this.submitted = true;
    if (this.signUpForm.valid) {
      this.authenticationService.register(this.signUpForm.value).subscribe(() => {
        this.signUpForm.reset();
        this.sweetAlertService.showNotification('success', 'Đăng kí thành công !!!');
        this.router.navigateByUrl('/login');
      }, error => {
        this.sweetAlertService.showNotification('error', 'Đăng kí thất bại !');
      });
    } else {
      this.sweetAlertService.showNotification('error', 'Vui lòng nhập đúng định dạng');
    }
  }

  usernameCheck($event) {
    this.username = $event.target.value;
    this.authenticationService.checkUserName(this.username).subscribe((check) => {
      this.checkUser = check;
    });
  }

  checkBirthday($event) {
    this.birthday = new Date($event.target.value);
    this.today = new Date();
    this.checkDay = false;
    const days = differenceInDays(this.today, this.birthday);
    if (days <= 0) {
      this.checkDay = true;
    }
    // if (this.birthday.getDay() >= this.today.getDay()) {
    //   this.invalidBirthday = true;
    // }
  }
}
