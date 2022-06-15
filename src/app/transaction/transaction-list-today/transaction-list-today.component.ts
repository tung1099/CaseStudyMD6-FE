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

  content = '';
  stt = '';
  category = '';
  amount = '';
  wallet = '';
  date1 = '';
  note = '';
  edit = '';
  delete = '';
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
      if (transaction1.length === 0) {
        this.content = 'Không có giao dịch trong ngày hôm nay';
      } else {
        this.stt = 'STT';
        this.category = 'Thể loại tiêu dùng';
        this.amount = 'Giá';
        this.wallet = 'Ví';
        this.date1 = 'Ngày';
        this.note = 'Ghi chú';
        this.edit = 'Sửa';
        this.delete = 'Xóa';
      }
    });
  }

}
