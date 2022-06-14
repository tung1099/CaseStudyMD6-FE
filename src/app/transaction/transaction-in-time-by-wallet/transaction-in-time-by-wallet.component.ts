import { Component, OnInit } from '@angular/core';
import {Transaction} from '../../model/transaction';
import {FormControl, FormGroup} from '@angular/forms';
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
  fileName = 'ExcelSheet.xlsx';
  idUser: number;
  date: Date[] = [];
  transaction: Transaction[] = [];
  wallet: Wallet[] = [];
  dateForm: FormGroup = new FormGroup({
    date1: new FormControl(),
    date2: new FormControl(),
    wallet: new FormControl()
  });
  constructor(private transactionService: TransactionService,
              private walletService: WalletService,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthencicationService) {
      this.idUser = this.authenticationService.currentUserValue.id;
      this.getTransactionInTimeByIdWallet();
  }

  ngOnInit() {
    this.getAllWalletById();
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
    this.transactionService.getTransactionInTimeByIdWallet(data).subscribe((list) => {
      this.transaction = list;
    });
    console.log(this.transaction);
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
