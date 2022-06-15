import { Component, OnInit } from '@angular/core';
import {Wallet} from "../../model/wallet";
import {ShareWalletService} from "../../service/shareWallet/share-wallet.service";
import {Router} from "@angular/router";
import {AuthencicationService} from "../../service/auth/authencication.service";

@Component({
  selector: 'app-share-list',
  templateUrl: './share-list.component.html',
  styleUrls: ['./share-list.component.css']
})
export class ShareListComponent implements OnInit {
  wallets: Wallet[] = [];
  idUser: number = 0;
  constructor(
    private shareService: ShareWalletService,
    private router: Router,
    private authentication: AuthencicationService
  ) {
    if (authentication.currentUserValue != null) {
      this.idUser = authentication.currentUserValue.id;
    }
  }

  ngOnInit() {
    this.getALlWallet();
  }

  getALlWallet() {
    this.shareService.getAllShare(this.idUser).subscribe((wallets) => {
      this.wallets = wallets;
    });
  }

}
