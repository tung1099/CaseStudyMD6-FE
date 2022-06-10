import { Component, OnInit } from '@angular/core';
import {Transaction} from '../../model/transaction';
import {SumTransactionTodayByIdWallet} from '../../model/sumTransactiontodayByIdWallet';
import {TransactionService} from '../../service/transaction/transaction.service';
import {ActivatedRoute, Router} from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-transaction-list-today-wallet',
  templateUrl: './transaction-list-today-wallet.component.html',
  styleUrls: ['./transaction-list-today-wallet.component.css']
})
export class TransactionListTodayWalletComponent implements OnInit {

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
    this.transactionService.getAllTransactionTodayByWallet(id).subscribe(transaction1 => {
      this.transaction = transaction1;
      $(function() {
        $('#transaction').DataTable({
          // 'paging': true,
          // 'lengthChange': false,
          // 'searching': true,
          // 'ordering': true,
          'info': true,
          // 'pageLength': 5,
          'autoWidth': false,
          'responsive': true,
        });
      });
    });
  }

  private getSumTransactionByWallet(id) {
    this.transactionService.getSumTransactionTodayByWallet(id).subscribe(sum => {
      this.sum = sum;
      console.log(sum);
    });
  }

}
