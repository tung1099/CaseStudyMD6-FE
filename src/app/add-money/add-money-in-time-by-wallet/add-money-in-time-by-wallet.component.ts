import { Component, OnInit } from '@angular/core';
import {Transaction} from '../../model/transaction';
import {Wallet} from '../../model/wallet';
import {FormControl, FormGroup} from '@angular/forms';
import {TransactionService} from '../../service/transaction/transaction.service';
import {WalletService} from '../../service/wallet/wallet.service';
import {ActivatedRoute} from '@angular/router';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {AddMoneyService} from '../../service/add-money/add-money.service';
import {AddMoney} from '../../model/addMoney';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-money-in-time-by-wallet',
  templateUrl: './add-money-in-time-by-wallet.component.html',
  styleUrls: ['./add-money-in-time-by-wallet.component.css']
})
export class AddMoneyInTimeByWalletComponent implements OnInit {
  fileName = 'ExcelSheet.xlsx';
  idUser: number;
  date: Date[] = [];
  addMoneys: AddMoney[] = [];
  wallet: Wallet[] = [];
  dateForm: FormGroup = new FormGroup({
    date1: new FormControl(),
    date2: new FormControl(),
    wallet: new FormControl()
  });

  constructor(private addMoneyService: AddMoneyService,
              private walletService: WalletService,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthencicationService) {
    this.idUser = this.authenticationService.currentUserValue.id;
    this.getAddMoneyInTimeByIdWallet();
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

  getAddMoneyInTimeByIdWallet() {
    const data = this.dateForm.value;
    data.wallet = {
      id: data.wallet
    };
    this.addMoneyService.getAddMoneyInTimeByIdWallet(data).subscribe((list) => {
      this.addMoneys = list;
    });
  }

  exportexcel(): void {
    /* pass here the table id */
    const element = document.getElementById('addMoney');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
}
