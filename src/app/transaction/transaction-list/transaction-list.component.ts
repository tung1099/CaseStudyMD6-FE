import { Component, OnInit } from '@angular/core';
import {Transaction} from '../../model/transaction';
import {TransactionService} from '../../service/transaction/transaction.service';
declare var $: any;

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  date: Date[] = [];
  transaction: Transaction[] = [];
  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.getAllTransaction();
  }

  private getAllTransaction() {
    this.transactionService.getAll().subscribe(transaction1 => {
      this.transaction = transaction1;
      $(function() {
        $('#transaction').DataTable({
          'paging': true,
          'lengthChange': false,
          'searching': true,
          'ordering': true,
          'info': true,
          'pageLength': 5,
          'autoWidth': false,
          'responsive': true,
        });
      });
    });
  }

}
