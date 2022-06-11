import { Component, OnInit } from '@angular/core';
import {AddMoneyService} from '../../service/add-money/add-money.service';
import {WalletService} from '../../service/wallet/wallet.service';
import {Wallet} from '../../model/wallet';
import {FormControl, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {

  id: number;
  wallets: Wallet[] = [];
  addMoneyForm: FormGroup = new FormGroup({
    money : new FormControl(),
    description : new FormControl(),
    wallet : new FormControl(),
  });
  constructor(private addMoneyService: AddMoneyService,
              private authentication: AuthencicationService,
              private walletService: WalletService) { }

  ngOnInit() {
    this.getAllWallet();
    this.id = this.authentication.currentUserValue.id;
  }

  addMoney() {
    const data = this.addMoneyForm.value;
    data.wallet = {
      id: data.wallet
    };
    this.addMoneyService.addMoney(this.id, data).subscribe(() => {
      Swal.fire({
        position: 'top-left',
        icon: 'success',
        title: 'Thêm thành công',
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.addMoneyForm.reset();
  }

   getAllWallet() {
    this.addMoneyService.getAllWallet().subscribe(wallets => {
      this.wallets = wallets;
    });
  }
}
