import { Component, OnInit } from '@angular/core';
import {AuthencicationService} from "../../service/auth/authencication.service";
import {WalletService} from "../../service/wallet/wallet.service";
import {Router} from "@angular/router";
import {Wallet} from "../../model/wallet";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShareWalletService} from "../../service/shareWallet/share-wallet.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-share-create',
  templateUrl: './share-create.component.html',
  styleUrls: ['./share-create.component.css']
})
export class ShareCreateComponent implements OnInit {
  select: string= "Chọn ví";
  userId: number = 0;
  checkMail = false;
  wallets: Wallet[] = [];
  checkUser: boolean;
  username: string;
  submitted = false;
  constructor(
    private authentication: AuthencicationService,
    private walletService: WalletService,
    private router: Router,
    private shareService: ShareWalletService
  ) {
    if (authentication.currentUserValue != null) {
      this.userId = authentication.currentUserValue.id;
    }
  }

  ngOnInit() {
    this.getALlWallet();
  }

  shareForm: FormGroup = new FormGroup({
    wallet: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required)
  })

  getALlWallet() {
    this.walletService.getAllByUserId(this.userId).subscribe((wallets) => {
      this.wallets = wallets;
    });
  }

  share() {
    this.submitted = true;
    if (this.shareForm.valid) {
      this.shareService.addNewShare(this.shareForm.get('wallet').value, this.shareForm.get('user').value).subscribe(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Gửi thành công!',
          showConfirmButton: false,
          timer: 1500});
      },err => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Ví này dã được chia sẻ cho người dùng!',
          showConfirmButton: false,
          timer: 1500});
      })
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

  usernameCheck($event) {
    this.username = $event.target.value;
    this.authentication.checkUserName(this.username).subscribe((check) => {
      this.checkUser = check;
    });
  }
}
