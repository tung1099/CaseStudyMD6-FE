import { Component, OnInit } from '@angular/core';
import {Wallet} from '../../model/wallet';
import {MoneyType} from '../../model/money-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WalletService} from '../../service/wallet/wallet.service';
import {MoneytypeService} from '../../service/moneytype/moneytype.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {IconService} from '../../service/icon/icon.service';
import {Icon} from '../../model/icon';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  styleUrls: ['./wallet-create.component.css']
})
export class WalletCreateComponent implements OnInit {
  idUser: number;
  wallet: Wallet = {};
  moneyTypes: MoneyType[] = [];
  icons: Icon[] = [];
  walletForm: FormGroup = new FormGroup({
    icon: new FormControl(),
    name: new FormControl('', [Validators.required]),
    total: new FormControl('', [Validators.required, Validators.pattern(/^\d*$/)]),
    note: new FormControl(),
    moneyType: new FormControl('', [Validators.required]),
  });


  constructor(private walletService: WalletService,
              private moneytypeService: MoneytypeService,
              private authService: AuthencicationService,
              private iconService: IconService,
              private router: Router) {
     this.idUser = authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllType();
    this.getAllIcon();
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
  createWallet() {
    const wallet = new FormData();
    wallet.append('name', this.walletForm.get('name').value);
    if (this.walletForm.get('icon').value != null) {
      wallet.append('icon', this.walletForm.get('icon').value);
    }
    wallet.append('total', this.walletForm.get('total').value);
    wallet.append('note', this.walletForm.get('note').value);
    wallet.append('moneyType', this.walletForm.get('moneyType').value);
    this.walletService.create(this.idUser, wallet).subscribe(() => {
      this.router.navigate(['/wallet/list', this.idUser]);
    });
  }
  get totalControl() {
    return this.walletForm.get('total');
  }
  get nameControl() {
    return this.walletForm.get('name');
  }
  get moneyTypeControl() {
    return this.walletForm.get('moneyType');
  }
}
