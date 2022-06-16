import { Component, OnInit } from '@angular/core';
import {Wallet} from '../../model/wallet';
import {MoneyType} from '../../model/money-type';
import {Icon} from '../../model/icon';
import {FormControl, FormGroup} from '@angular/forms';
import {WalletService} from '../../service/wallet/wallet.service';
import {MoneytypeService} from '../../service/moneytype/moneytype.service';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {IconService} from '../../service/icon/icon.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SweetAlertService} from '../../service/sweetAlert/sweet-alert.service';

@Component({
  selector: 'app-wallet-edit',
  templateUrl: './wallet-edit.component.html',
  styleUrls: ['./wallet-edit.component.css']
})
export class WalletEditComponent implements OnInit {

  idUser: number;
  wallet: Wallet = {};
  moneyTypes: MoneyType[] = [];
  icons: Icon[] = [];
  walletForm: FormGroup = new FormGroup({
    id: new FormControl(),
    icon: new FormControl(),
    name: new FormControl(),
    total: new FormControl(),
    balance: new FormControl(),
    date: new FormControl(),
    note: new FormControl(),
    moneyType: new FormControl(),
  });


  constructor(private walletService: WalletService,
              private moneytypeService: MoneytypeService,
              private authService: AuthencicationService,
              private iconService: IconService,
              private activatedRoute: ActivatedRoute,
              private sweetAlertService: SweetAlertService,
              private router: Router) {
    this.idUser = authService.currentUserValue.id;
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.getWalletById(id);
    });
  }

  ngOnInit() {
    this.getAllType();
    this.getAllIcon();
  }
  getWalletById(id) {
    this.walletService.getById(this.idUser, id).subscribe((wallet) => {
      this.wallet = wallet;
      this.walletForm = new FormGroup({
        id: new FormControl(wallet.id),
        name: new FormControl(wallet.name),
        icon: new FormControl(wallet.icon.id),
        total: new FormControl(wallet.total),
        balance: new FormControl(wallet.balance),
        date: new FormControl(wallet.date),
        note: new FormControl(wallet.note),
        moneyType: new FormControl(wallet.moneyType.id)
      });
    });
  }
  get idControl() {
    return this.walletForm.get('id');
  }

  getAllIcon() {
    this.iconService.getAll().subscribe((data) => {
      this.icons = data;
    }, (error) => {
      alert(error);
    });
  }
  getAllType() {
    this.walletService.getAllType().subscribe((data) => {
      this.moneyTypes = data;
    }, (error) => {
      alert(error);
    });
  }
  editWallet() {
    const data = this.walletForm.value;
    data.moneyType = {
      id: data.moneyType
    };
    data.icon = {
      id: data.icon
    };
    this.walletService.edit(this.idUser, this.idControl.value, data).subscribe(() => {
      this.sweetAlertService.showNotification('success', 'Xong');
    }, () => {
      this.sweetAlertService.showNotification('error', 'Hmm... Đã có lỗi xảy ra');
    });
  }


}
