import { Component, OnInit } from '@angular/core';
import {Wallet} from '../../model/wallet';
import {WalletService} from '../../service/wallet/wallet.service';
import {identity} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {SumMoney} from '../../model/sum-money';
import {ShareWalletService} from '../../service/shareWallet/share-wallet.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {SweetAlertService} from '../../service/sweetAlert/sweet-alert.service';
import {AddMoneyService} from '../../service/add-money/add-money.service';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css']
})
export class WalletListComponent implements OnInit {

  constructor(private walletService: WalletService,
              private addMoneyService: AddMoneyService,
              private sweetAlertService: SweetAlertService,
              private authService: AuthencicationService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private shareService: ShareWalletService) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.idWallet = +paramMap.get('id');
    });
    if (authService.currentUserValue != null) {
      this.idUser = authService.currentUserValue.id;
    }
    console.log(this.idUser);
  }

  get moneyControl() {
    return this.addMoneyForm.get('money');
  }

  idWallet: number;
  select = 'Chọn ví';
  userId  = 0;
  checkMail = false;
  checkUser: boolean;
  username: string;
  submitted = false;
  wallets: Wallet[] = [];
  wallet: Wallet = {};
  idUser = 0;
  sumMoneys: SumMoney[] = [];
  shareForm: FormGroup = new FormGroup({
    user: new FormControl('', Validators.required)
  });

  addMoneyForm: FormGroup = new FormGroup({
    money : new FormControl('', [Validators.required, Validators.pattern(/^\d*$/)]),
    description : new FormControl(),
    wallet : new FormControl(),
  });

  findWalletId(id) {
    this.idWallet = id;
  }

  ngOnInit() {
    this.getAllWalletByUser();
    this.getSumMoney();
  }
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
  share() {
    this.submitted = true;
    if (this.shareForm.valid) {
      this.shareService.addNewShare(this.idWallet, this.shareForm.get('user').value).subscribe(() => {
        this.shareForm.reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Gửi thành công!',
          showConfirmButton: false,
          timer: 1500});
        // @ts-ignore
      }, error => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Ví này dã được chia sẻ cho người dùng!',
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
    this.shareForm.reset();
  }

  usernameCheck($event) {
    this.username = $event.target.value;
    this.authService.checkUserName(this.username).subscribe((check) => {
      this.checkUser = check;
    });
  }

  addMoney() {
    const data = this.addMoneyForm.value;
    data.wallet = {
      id: data.wallet
    };
    this.addMoneyService.addMoney(this.idWallet, data).subscribe(() => {
      this.getAllWalletByUser();
      this.router.navigate(['wallet/list']);

      this.sweetAlertService.showNotification('success', 'Xong');
      this.addMoneyForm.reset();

    }, () => {
      this.sweetAlertService.showNotification('error', 'Hmm... Đã có lỗi xảy ra');
    });
  }

}
