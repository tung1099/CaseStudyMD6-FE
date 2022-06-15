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
  content = '';
  stt = '';
  category = '';
  amount = '';
  wallet = '';
  date1 = '';
  note = '';
  edit = '';
  delete = '';
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
      if (transaction1.length === 0) {
        this.content = 'Không có giao dịch';
      } else {
        this.stt = 'Stt';
        this.category = 'Thể loại tiêu dùng';
        this.amount = 'Giá';
        this.wallet = 'Ví';
        this.date1 = 'Ngày';
        this.note = 'Ghi chú';
        this.edit = 'Chỉnh sửa';
        this.delete = 'Xóa';
      }
      console.log(this.transaction);
    });
  }

}
