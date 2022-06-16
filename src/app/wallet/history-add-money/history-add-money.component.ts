import { Component, OnInit } from '@angular/core';
import {AddMoney} from '../../model/addMoney';
import {WalletService} from '../../service/wallet/wallet.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Wallet} from '../../model/wallet';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-history-add-money',
  templateUrl: './history-add-money.component.html',
  styleUrls: ['./history-add-money.component.css']
})
export class HistoryAddMoneyComponent implements OnInit {
  addMoneys: AddMoney[] = [];
  wallet: Wallet = {};
  idWallet: number;
  idUser: number;

  constructor(private walletService: WalletService,
              private activatedRoute: ActivatedRoute,
              private authService: AuthencicationService
              ) {
    this.idUser = authService.currentUserValue.id;
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.idWallet = id;
      this.getWalletById(id);
    });
  }

  ngOnInit() {
    this.getAllAddMoneyByWallet();
  }

  getAllAddMoneyByWallet() {
    return this.walletService.getAllAddMoneyByWallet(this.idUser, this.idWallet).subscribe((addMoneys) => {
      this.addMoneys = addMoneys;
    });
  }

  getWalletById(id) {
    return this.walletService.getById(this.idUser, this.idWallet).subscribe((wallet) => {
      this.wallet = wallet;
    });
  }

}
