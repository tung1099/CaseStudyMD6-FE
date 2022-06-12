import { Component, OnInit } from '@angular/core';
import {Transaction} from '../../model/transaction';
import {TransactionService} from '../../service/transaction/transaction.service';
import {AuthencicationService} from '../../service/auth/authencication.service';
declare var $: any;

@Component({
  selector: 'app-transaction-list-today',
  templateUrl: './transaction-list-today.component.html',
  styleUrls: ['./transaction-list-today.component.css']
})
export class TransactionListTodayComponent implements OnInit {
  sumMoney: number;
  today = Date.now();
  idUser: number;
  transaction: Transaction[] = [];
  constructor(
    private transactionService: TransactionService,
    private authService: AuthencicationService
  ) {
    this.idUser = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllTransaction();
  }

  private getAllTransaction() {
    this.transactionService.getAllTransactionToday(this.idUser).subscribe(transaction1 => {
      this.transaction = transaction1;
    });
  }

}
