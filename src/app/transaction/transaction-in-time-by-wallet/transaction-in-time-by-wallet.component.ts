import { Component, OnInit } from '@angular/core';
import {Transaction} from '../../model/transaction';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TransactionService} from '../../service/transaction/transaction.service';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {Wallet} from '../../model/wallet';
import {WalletService} from '../../service/wallet/wallet.service';
import {ActivatedRoute} from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-transaction-in-time-by-wallet',
  templateUrl: './transaction-in-time-by-wallet.component.html',
  styleUrls: ['./transaction-in-time-by-wallet.component.css']
})
export class TransactionInTimeByWalletComponent implements OnInit {
  download = '';
  content1 = '';
  index1 = '';
  category1 = '';
  price1 = '';
  walletName1 = '';
  dateTransaction1 = '';
  note1 = '';
  edit1 = '';
  delete1 = '';
  fileName = 'giao dich.xlsx';
  idUser: number;
  date: Date[] = [];
  transaction: Transaction[] = [];
  wallet: Wallet[] = [];
  dateForm: FormGroup = new FormGroup({
    date1: new FormControl('', [Validators.required]),
    date2: new FormControl('', [Validators.required]),
    wallet: new FormControl('', [Validators.required])
  });
  constructor(private transactionService: TransactionService,
              private walletService: WalletService,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthencicationService) {
      this.idUser = this.authenticationService.currentUserValue.id;
      // this.getTransactionInTimeByIdWallet();
  }

  ngOnInit() {
    this.getAllWalletById();
    this.getAllTransaction();
  }

  private getAllTransaction() {
    this.transactionService.getAll(this.idUser).subscribe(transaction1 => {
      this.transaction = transaction1;
      if (transaction1.length === 0) {
        this.content1 = 'Không có giao dịch';
        this.index1 = '';
        this.category1 = '';
        this.price1 = '';
        this.walletName1 = '';
        this.dateTransaction1 = '';
        this.note1 = '';
        this.edit1 = '';
        this.delete1 = '';
      } else {
        this.content1 = '';
        this.index1 = 'STT';
        this.category1 = 'Thể loại tiêu dùng';
        this.price1 = 'Giá';
        this.walletName1 = 'Ví';
        this.dateTransaction1 = 'Ngày giao dịch';
        this.note1 = 'Ghi chú';
        this.edit1 = 'Chỉnh sửa';
        this.delete1 = 'Xóa';
        this.download = 'Tải xuống';
      }
      console.log(this.transaction);
    });
  }

  getAllWalletById() {
    this.walletService.getAllByUserId(this.idUser).subscribe(wallet => {
        this.wallet = wallet;
      },
      (error) => {
        console.log(error);
      });
  }
  getTransactionInTimeByIdWallet() {
    const data = this.dateForm.value;
    data.wallet = {
      id: data.wallet
    };
    this.transactionService.getTransactionInTimeByIdWallet(data).subscribe((list1) => {
      this.transaction = list1;
      if (list1.length === 0) {
        this.content1 = 'Không có giao dịch nào trong khoảng thời gian này';
        this.index1 = '';
        this.category1 = '';
        this.price1 = '';
        this.walletName1 = '';
        this.dateTransaction1 = '';
        this.note1 = '';
        this.edit1 = '';
        this.delete1 = '';
      } else {
        this.content1 = '';
        this.index1 = 'STT';
        this.category1 = 'Thể loại tiêu dùng';
        this.price1 = 'Giá';
        this.walletName1 = 'Ví';
        this.dateTransaction1 = 'Ngày giao dịch';
        this.note1 = 'Ghi chú';
        this.edit1 = 'Chỉnh sửa';
        this.delete1 = 'Xóa';
        this.download = 'Tải xuống';
      }
    });
    console.log(this.transaction);
  }
  get walletControl() {
    return this.dateForm.get('wallet');
  }
  get date1Control() {
    return this.dateForm.get('date1');
  }
  get date2Control() {
    return this.dateForm.get('date2');
  }

  exportexcel(): void  {
    /* pass here the table id */
    const element = document.getElementById('transaction');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
}
