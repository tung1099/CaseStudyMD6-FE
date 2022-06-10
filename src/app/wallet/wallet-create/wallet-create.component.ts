import { Component, OnInit } from '@angular/core';
import {Wallet} from '../../model/wallet';
import {MoneyType} from '../../model/money-type';
import {FormControl, FormGroup} from '@angular/forms';
import {WalletService} from '../../service/wallet/wallet.service';
import {MoneytypeService} from '../../service/moneytype/moneytype.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {IconService} from '../../service/icon/icon.service';
import {Icon} from '../../model/icon';

@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  styleUrls: ['./wallet-create.component.css']
})
export class WalletCreateComponent implements OnInit {
  idUser = 1;
  selectedFile: any = File;
  wallet: Wallet = {};
  moneyTypes: MoneyType[] = [];
  icons: Icon[] = [];
  walletForm: FormGroup = new FormGroup({
    icon: new FormControl(),
    name: new FormControl(),
    total: new FormControl(),
    moneyType: new FormControl(),
    note: new FormControl(),
    // user: new FormControl()
  });


  constructor(private walletService: WalletService,
              private moneytypeService: MoneytypeService,
              private iconService: IconService,
              private router: Router) { }

  ngOnInit() {
    this.getAllType();
    this.getAllIcon();
  }
  onSelectFile(event) {
    this.selectedFile = event.target.files[0];
  }
  getAllIcon() {
    this.iconService.getAll().subscribe((data) => {
      this.icons = data;
    }, (error) => {
      alert(error);
    });
  }
  getAllType() {
    this.moneytypeService.getAll().subscribe((data) => {
      this.moneyTypes = data;
    }, (error) => {
      alert(error);
    });
  }


}
