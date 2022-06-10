import { Component, OnInit } from '@angular/core';
import {Wallet} from '../../model/wallet';
import {WalletService} from '../../service/wallet/wallet.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-wallet-detail',
  templateUrl: './wallet-detail.component.html',
  styleUrls: ['./wallet-detail.component.css']
})
export class WalletDetailComponent implements OnInit {
  wallet: Wallet = {};
  id: number;

  constructor(private walletService: WalletService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.id = id;
      this.getWalletById(id);
    });
  }

  ngOnInit() {
    this.getWalletById(this.id);
  }
  getWalletById(id) {
    return this.walletService.getById(id).subscribe((wallet) => {
      this.wallet = wallet;
    });
  }

}
