import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TransactionService} from '../../service/transaction/transaction.service';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {Router} from '@angular/router';
import {Transaction} from '../../model/transaction';
import {LoginComponent} from '../../login/login.component';

@Component({
  selector: 'app-transaction-in-time',
  templateUrl: './transaction-in-time.component.html',
  styleUrls: ['./transaction-in-time.component.css']
})
export class TransactionInTimeComponent implements OnInit {

  content = '';
  index = '';
  category = '';
  price = '';
  walletName = '';
  dateTransaction = '';
  note = '';
  edit = '';
  delete = '';
  idUser: number;
  date: Date[] = [];
  transaction: Transaction[] = [];
  dateForm: FormGroup = new FormGroup({
    date1: new FormControl('', [Validators.required]),
    date2: new FormControl('', [Validators.required])
  });
  constructor(private transactionService: TransactionService,
              private authenticationService: AuthencicationService,
              private router: Router) {
    this.idUser = this.authenticationService.currentUserValue.id;
  }

  ngOnInit() {
  }

   getTransactionInTime() {
    const data = this.dateForm.value;
    this.transactionService.getTransactionInTime(this.idUser, data).subscribe((list) => {
      this.transaction = list;
      if (list.length === 0) {
        this.content = 'Không có giao dịch nào trong khoảng thời gian này';
      } else {
        this.content = '';
        this.index = 'STT';
        this.category = 'Thể loại tiêu dùng';
        this.price = 'Giá';
        this.walletName = 'Ví';
        this.dateTransaction = 'Ngày giao dịch';
        this.note = 'Ghi chú';
        this.edit = 'Chỉnh sửa';
        this.delete = 'Xóa';
      }
    });
  }
  get date1Control() {
    return this.dateForm.get('date1');
  }
  get date2Control() {
    return this.dateForm.get('date2');
  }
}
