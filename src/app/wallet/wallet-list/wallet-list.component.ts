import { Component, OnInit } from '@angular/core';
import {Wallet} from '../../model/wallet';
import {WalletService} from '../../service/wallet/wallet.service';
import {identity} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css']
})
export class WalletListComponent implements OnInit {
  wallets: Wallet[] = [];
  wallet: Wallet = {};
  userId = 1;

  constructor(private walletService: WalletService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAllWalletByUser(this.userId);
  }
  getAllWalletByUser(id) {
    this.walletService.getAllByUserId(id).subscribe((wallets) => {
      this.wallets = wallets;
    }, (error) => {
      alert(error);
    });
  }

}
