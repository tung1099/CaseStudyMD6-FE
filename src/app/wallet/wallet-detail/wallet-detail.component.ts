import { Component, OnInit } from '@angular/core';
import {Wallet} from '../../model/wallet';
import {WalletService} from '../../service/wallet/wallet.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {SumMoney} from '../../model/sum-money';

@Component({
  selector: 'app-wallet-detail',
  templateUrl: './wallet-detail.component.html',
  styleUrls: ['./wallet-detail.component.css']
})
export class WalletDetailComponent implements OnInit {
  check : boolean;
  wallet: Wallet = {};
  id: number;
  idUser: number;
  constructor(private walletService: WalletService,
              private authService: AuthencicationService,
              private activatedRoute: ActivatedRoute) {
    this.idUser = authService.currentUserValue.id;
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.id = id;
      this.getWalletById(id);
    });
  }

  ngOnInit() {
    this.getWalletById(this.id);
    if (this.wallet.user.id == this.idUser) {
      this.check = true;
    } else {
      this.check= false;
    }
  }
  getWalletById(id) {
    return this.walletService.getById(id).subscribe((wallet) => {
      this.wallet = wallet;
    });
  }

}
