import { Component, OnInit } from '@angular/core';
import {MoneytypeService} from '../../service/moneytype/moneytype.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FnParam} from '@angular/compiler/src/output/output_ast';
import {WalletService} from '../../service/wallet/wallet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wallet-delete',
  templateUrl: './wallet-delete.component.html',
  styleUrls: ['./wallet-delete.component.css']
})
export class WalletDeleteComponent implements OnInit {

  constructor(private walletService: WalletService,
              private activatedRoute: ActivatedRoute,
              private router: Router  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.deleteWallet(id);
    });
  }

  ngOnInit() {
  }
  deleteWallet(id) {
    this.walletService.delete(id).subscribe(() => {
      this.router.navigateByUrl('/wallet/list');
    });
  }
}
