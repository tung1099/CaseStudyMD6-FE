import { Component, OnInit } from '@angular/core';
import {Wallet} from '../../model/wallet';
import {WalletService} from '../../service/wallet/wallet.service';
import {identity} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {SumMoney} from '../../model/sum-money';
// import Swal from "sweetalert2";
// import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShareWalletService} from '../../service/shareWallet/share-wallet.service';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css']
})
export class WalletListComponent implements OnInit {
  // select = "Chọn ví";
  // userId: number = 0;
  // checkMail = false;
  // checkUser: boolean;
  // username: string;
  // submitted = false;
  wallets: Wallet[] = [];
  wallet: Wallet = {};
  idUser = 0;
  sumMoneys: SumMoney[] = [];



  constructor(private walletService: WalletService,
              private authService: AuthencicationService,
              private activatedRoute: ActivatedRoute,
              private shareService: ShareWalletService) {
    if (authService.currentUserValue != null) {
      this.idUser = authService.currentUserValue.id;
    }
    console.log(this.idUser);
  }

  ngOnInit() {
    this.getAllWalletByUser();
    this.getSumMoney();
  }
  // shareForm: FormGroup = new FormGroup({
  //   wallet: new FormControl('', Validators.required),
  //   user: new FormControl('', Validators.required)
  // })
  getAllWalletByUser() {
    this.walletService.getAllByUserId(this.idUser).subscribe((wallets) => {
      this.wallets = wallets;
    });
  }

  getSumMoney() {
    this.walletService.getSumMoney(this.idUser).subscribe((sumMoneys) => {
      this.sumMoneys = sumMoneys;
      console.log(sumMoneys);
    });
  }
  // share() {
  //   this.submitted = true;
  //   if (this.shareForm.valid) {
  //     this.shareService.addNewShare(this.shareForm.get('wallet').value, this.shareForm.get('user').value).subscribe(() => {
  //       this.shareForm.reset()
  //       Swal.fire({
  //         position: 'top-end',
  //         icon: 'success',
  //         title: 'Gửi thành công!',
  //         showConfirmButton: false,
  //         timer: 1500});
  //     },err => {
  //       Swal.fire({
  //         position: 'top-end',
  //         icon: 'error',
  //         title: 'Ví này dã được chia sẻ cho người dùng!',
  //         showConfirmButton: false,
  //         timer: 1500});
  //     })
  //   } else {
  //     // @ts-ignore
  //     Swal.fire({
  //       position: 'top-end',
  //       icon: 'error',
  //       title: 'Vui lòng nhập đúng định dạng!',
  //       showConfirmButton: false,
  //       timer: 1500});
  //   }
  // }

  // usernameCheck($event) {
  //   this.username = $event.target.value;
  //   this.authService.checkUserName(this.username).subscribe((check) => {
  //     this.checkUser = check;
  //   });
  // }

}
