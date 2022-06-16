import { Component, OnInit } from '@angular/core';
import {Transaction} from '../../model/transaction';
import {SumTransactionTodayByIdWallet} from '../../model/sumTransactiontodayByIdWallet';
import {TransactionService} from '../../service/transaction/transaction.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Wallet} from '../../model/wallet';
declare var $: any;
@Component({
  selector: 'app-transacsion-all-wallet',
  templateUrl: './transacsion-all-wallet.component.html',
  styleUrls: ['./transacsion-all-wallet.component.css']
})
export class TransacsionAllWalletComponent implements OnInit {

  transaction: Transaction[] = [];
  sum: SumTransactionTodayByIdWallet[] = [];
  constructor(
    private transactionService: TransactionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.getAllTransactionByWallet(id);
      this.getSumTransactionByWallet(id);
    });
  }

  ngOnInit() {
  }

  private getAllTransactionByWallet(id) {
    this.transactionService.getAllTransactionByWallet(id).subscribe(transaction1 => {
      this.transaction = transaction1;
      // tslint:disable-next-line:only-arrow-functions
      $(function() {
        $('#transaction').DataTable({
          paging: true,
          lengthChange: false,
          searching: true,
          ordering: true,
          info: true,
          pageLength: 3,
          autoWidth: false,
          responsive: true,
        });
      });
    });
  }

  private getSumTransactionByWallet(id) {
    this.transactionService.getSumTransactionWallet(id).subscribe(sum => {
      this.sum = sum;
      console.log(sum);
    });
  }

}
