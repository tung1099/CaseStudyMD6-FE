import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthencicationService} from '../service/auth/authencication.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  });
  constructor(private authenticationService: AuthencicationService,
              private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authenticationService.register(this.registerForm.value).subscribe(() => {
      this.registerForm.reset();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Đăng kí thành công!',
        showConfirmButton: false,
        timer: 1500});
      this.router.navigate(['login']);
    });
  }

}
