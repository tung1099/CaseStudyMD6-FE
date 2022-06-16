import { Component, OnInit } from '@angular/core';
import {AddMoney} from '../../model/addMoney';
import {WalletService} from '../../service/wallet/wallet.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Wallet} from '../../model/wallet';

@Component({
  selector: 'app-history-add-money',
  templateUrl: './history-add-money.component.html',
  styleUrls: ['./history-add-money.component.css']
})
export class HistoryAddMoneyComponent implements OnInit {
  addMoneys: AddMoney[] = [];
  wallet: Wallet = {};
  idWallet: number;

  constructor(private walletService: WalletService,
              private activatedRoute: ActivatedRoute
              ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const idWallet = paramMap.get('id');
      // @ts-ignore
      this.idWallet = idWallet;
      this.getWalletById(idWallet);
    });
  }

  ngOnInit() {
    this.getAllAddMoneyByWallet();
  }

  getAllAddMoneyByWallet() {
    return this.walletService.getAllAddMoneyByWallet(this.idWallet).subscribe((addMoneys) => {
      this.addMoneys = addMoneys;
    });
  }

  getWalletById(id) {
    return this.walletService.getById(id).subscribe((wallet) => {
      this.wallet = wallet;
    });
  }

}
