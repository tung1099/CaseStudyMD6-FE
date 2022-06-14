import { Component, OnInit } from '@angular/core';
import {Wallet} from '../../model/wallet';
import {WalletService} from '../../service/wallet/wallet.service';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-chart-display',
  templateUrl: './chart-display.component.html',
  styleUrls: ['./chart-display.component.css']
})
export class ChartDisplayComponent implements OnInit {

  idUser: number;
  wallet: Wallet[] = [];
  constructor(
    private walletService: WalletService,
    private authService: AuthencicationService,
    private router: Router,
    InOutForm: FormGroup = new FormGroup({
      year: new FormControl(),
      month: new FormControl(),
    })
  ) {
    if (authService.currentUserValue != null) {
      this.idUser = authService.currentUserValue.id;
    }
  }
  getAllWalletByUser() {
    this.walletService.getAllByUserId(this.idUser).subscribe((wallets) => {
      this.wallet = wallets;
    });
  }

  ngOnInit() {
    this.getAllWalletByUser();
  }

}
