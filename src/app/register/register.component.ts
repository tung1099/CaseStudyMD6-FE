import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthencicationService} from '../service/auth/authencication.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  regexUsername = '^A-Za-z0-9 \\S||@||\\.||_';

  signUpForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.maxLength(32), Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern(this.regexUsername)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('(0)[0-9]{9,10}')]),
    birthDay: new FormControl(''),
    address: new FormControl('', [Validators.required, Validators.pattern(this.regexUsername)]),
  });
  constructor(private authenticationService: AuthencicationService,
              private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.submitted = true;
    if (this.signUpForm.valid) {
      this.authenticationService.register(this.signUpForm.value).subscribe(() => {
        this.signUpForm.reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Đăng kí thành công!',
          showConfirmButton: false,
          timer: 1500});
        this.router.navigateByUrl('/login');
      }, error => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Đăng kí thất bại!',
          showConfirmButton: false,
          timer: 1500});
      });
    } else {
      // @ts-ignore
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Vui lòng nhập đúng định dạng!',
        showConfirmButton: false,
        timer: 1500});
    }
  }

}
