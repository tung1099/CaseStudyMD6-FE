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
  note = '';
  check: boolean = false;
  wallet: Wallet = {};
  idWallet: number;
  idUser: number;
  constructor(private walletService: WalletService,
              private authService: AuthencicationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.idUser = authService.currentUserValue.id;
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.idWallet = id;

    });
  }

  ngOnInit() {
    this.getWalletById();
    console.log(this.check)
  }
  getWalletById() {
     this.walletService.getById(this.idUser, this.idWallet).subscribe((wallet) => {
       if (this.wallet.note == null){
         this.note = 'Không có ghi chú'
       } else {
         this.note = this.wallet.note
       }
      this.wallet = wallet;
       if (this.idUser == this.wallet.user.id) {
         this.check = true;
       } else {
         this.check = false;
       }
    }, error => () => {
       this.router.navigate(['/wallet/list', this.idUser]);
     }
  );
  }

}
