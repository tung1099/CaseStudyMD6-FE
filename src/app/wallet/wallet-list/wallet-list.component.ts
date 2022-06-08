import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {Wallet} from '../../model/wallet';
import {WalletService} from '../../service/wallet/wallet.service';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css']
})
export class WalletListComponent implements OnInit {

  wallets: Wallet[] = [];
  constructor(private walletService: WalletService) { }

  ngOnInit() {
    this.getAllWallet();
  }

  private getAllWallet() {
    this.walletService.getAllWallet().subscribe(wallets => {
      this.wallets = wallets;
    });
  }
}
