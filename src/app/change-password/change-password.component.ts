import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Repass} from "../model/repass";
import {AuthencicationService} from "../service/auth/authencication.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  currentUserId: number;
  constructor(
    private authentication: AuthencicationService,
    private router: Router
  ) {
    this.currentUserId = this.authentication.currentUserValue.id;
  }

  ngOnInit() {
  }

  changePasswordForm: FormGroup = new FormGroup({
      oldPassword: new FormControl('', [Validators.required, Validators.maxLength(32), Validators.minLength(6)]),
      newPassword: new FormControl('', [Validators.required, Validators.maxLength(32), Validators.minLength(6)]),
      confirmNewPassword: new FormControl('', [Validators.required]),
    }
  );
  submit(){
    this.authentication.changePassword(this.currentUserId, this.changePasswordForm.value).subscribe(() => {      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Thành công!',
        showConfirmButton: false,
        timer: 1500});
      this.changePasswordForm.reset();
    }, error => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Thất bại!',
        showConfirmButton: false,
        timer: 1500});
    })
  }
}
