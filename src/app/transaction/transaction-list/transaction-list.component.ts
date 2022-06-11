import { Component, OnInit } from '@angular/core';
import {Transaction} from '../../model/transaction';
import {TransactionService} from '../../service/transaction/transaction.service';
import {AuthencicationService} from '../../service/auth/authencication.service';
declare var $: any;

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  idUser: number;
  date: Date[] = [];
  transaction: Transaction[] = [];
  constructor(
    private transactionService: TransactionService,
    private authService: AuthencicationService,
  ) {
    this.idUser = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllTransaction();
  }

  private getAllTransaction() {
    this.transactionService.getAll(this.idUser).subscribe(transaction1 => {
      this.transaction = transaction1;
      console.log(this.transaction);
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
