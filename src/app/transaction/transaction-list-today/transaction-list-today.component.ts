import { Component, OnInit } from '@angular/core';
import {Transaction} from '../../model/transaction';
import {TransactionService} from '../../service/transaction/transaction.service';

@Component({
  selector: 'app-transaction-list-today',
  templateUrl: './transaction-list-today.component.html',
  styleUrls: ['./transaction-list-today.component.css']
})
export class TransactionListTodayComponent implements OnInit {

  transaction: Transaction[] = [];
  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.getAllTransaction();
  }

  private getAllTransaction() {
    this.transactionService.getAllTransactionToday().subscribe(transaction1 => {
      this.transaction = transaction1;
    });
  }

}
