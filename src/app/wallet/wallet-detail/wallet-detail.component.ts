import { Component, OnInit } from '@angular/core';
import {Wallet} from '../../model/wallet';
import {WalletService} from '../../service/wallet/wallet.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {SumMoney} from '../../model/sum-money';

@Component({
  selector: 'app-wallet-detail',
  templateUrl: './wallet-detail.component.html',
  styleUrls: ['./wallet-detail.component.css']
})
export class WalletDetailComponent implements OnInit {
  wallet: Wallet = {};
  idWallet: number;
  idUser: number;
  constructor(private walletService: WalletService,
              private authService: AuthencicationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.idUser = authService.currentUserValue.id;
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.idWallet = id;
    });
  }

  ngOnInit() {
    this.getWalletById();
  }
  getWalletById() {
     this.walletService.getWalletByIdWalletIdUser(this.idUser, this.idWallet).subscribe((wallet) => {
      this.wallet = wallet;
    }, error => () => {
       this.router.navigate(['/wallet/list', this.idUser]);
     });
  }

}
