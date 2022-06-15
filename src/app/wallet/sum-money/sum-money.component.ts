import { Component, OnInit } from '@angular/core';
import {SumMoney} from '../../model/sum-money';
import {WalletService} from '../../service/wallet/wallet.service';
import {AuthencicationService} from '../../service/auth/authencication.service';

@Component({
  selector: 'app-sum-money',
  templateUrl: './sum-money.component.html',
  styleUrls: ['./sum-money.component.css']
})
export class SumMoneyComponent implements OnInit {
  sumMoneys: SumMoney[] = [];
  sumMoney: SumMoney = {};
  idUser: number;

  constructor(private walletService: WalletService,
              private authService: AuthencicationService) {
    this.idUser = authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getSumMoney();
  }
  getSumMoney() {
    this.walletService.getSumMoney(this.idUser).subscribe((sumMoneys) => {
      this.sumMoneys = sumMoneys;
      console.log(sumMoneys);
    });
  }

}
