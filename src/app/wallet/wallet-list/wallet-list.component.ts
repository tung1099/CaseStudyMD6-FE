import { Component, OnInit } from '@angular/core';
import {Wallet} from '../../model/wallet';
import {WalletService} from '../../service/wallet/wallet.service';
import {identity} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css']
})
export class WalletListComponent implements OnInit {
  wallets: Wallet[] = [];
  wallet: Wallet = {};
  idUser: number = 0;

  constructor(private walletService: WalletService,
              private authService: AuthencicationService,
              private activatedRoute: ActivatedRoute) {
    if (authService.currentUserValue != null) {
      this.idUser = authService.currentUserValue.id;
    }
    console.log(this.idUser);
  }

  ngOnInit() {
    this.getAllWalletByUser();
  }
  getAllWalletByUser() {
    this.walletService.getAllByUserId(this.idUser).subscribe((wallets) => {
      this.wallets = wallets;
    });
  }

}
