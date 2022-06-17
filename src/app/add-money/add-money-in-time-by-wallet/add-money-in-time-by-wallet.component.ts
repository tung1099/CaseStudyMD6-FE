import { Component, OnInit } from '@angular/core';
import {Transaction} from '../../model/transaction';
import {Wallet} from '../../model/wallet';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TransactionService} from '../../service/transaction/transaction.service';
import {WalletService} from '../../service/wallet/wallet.service';
import {ActivatedRoute} from '@angular/router';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {AddMoneyService} from '../../service/add-money/add-money.service';
import {AddMoney} from '../../model/addMoney';
// @ts-ignore
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-money-in-time-by-wallet',
  templateUrl: './add-money-in-time-by-wallet.component.html',
  styleUrls: ['./add-money-in-time-by-wallet.component.css']
})
export class AddMoneyInTimeByWalletComponent implements OnInit {
  content = '';
  t1 = '';
  t2 = '';
  t3 = '';
  t4 = '';
  buttonSubmit = '';
  fileName = 'Bao cao thu.xlsx';
  idUser: number;
  date: Date[] = [];
  addMoneys: AddMoney[] = [];
  wallet: Wallet[] = [];
  dateForm: FormGroup = new FormGroup({
    date1: new FormControl('', [Validators.required]),
    date2: new FormControl('', [Validators.required]),
    wallet: new FormControl('', [Validators.required])
  });

  constructor(private addMoneyService: AddMoneyService,
              private walletService: WalletService,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthencicationService) {
    this.idUser = this.authenticationService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllWalletById();
    this.getAllAddMoney();
  }

  getAllWalletById() {
    this.walletService.getAllByUserId(this.idUser).subscribe(wallet => {
        this.wallet = wallet;
      },
      (error) => {
        console.log(error);
      });
  }
  getAllAddMoney() {
    this.addMoneyService.getAddMoneyByIdUser(this.idUser).subscribe((data) => {
      this.addMoneys = data;
      if (data.length === 0) {
        this.content = 'Không có dữ liệu trong khoảng thời gian đã chọn';
        this.t1 = '';
        this.t2 = '';
        this.t3 = '';
        this.t4 = '';
        this.buttonSubmit = '';
      } else {
        this.content = '';
        this.t1 = 'STT';
        this.t2 = 'Ngày nạp tiền';
        this.t3 = 'Số tiền nạp';
        this.t4 = 'Ví';
        this.buttonSubmit = 'Xuất File Excel';
      }
      });
  }

  getAddMoneyInTimeByIdWallet() {
    const data = this.dateForm.value;
    data.wallet = {
      id: data.wallet
    };
    this.addMoneyService.getAddMoneyInTimeByIdWallet(data).subscribe((list) => {
      this.addMoneys = list;
      if (list.length === 0) {
        this.content = 'Không có dữ liệu trong khoảng thời gian đã chọn';
        this.t1 = '';
        this.t2 = '';
        this.t3 = '';
        this.t4 = '';
        this.buttonSubmit = '';
      } else {
        this.content = '';
        this.t1 = 'STT';
        this.t2 = 'Ngày nạp tiền';
        this.t3 = 'Số tiền nạp';
        this.t4 = 'Ví';
        this.buttonSubmit = 'Xuất File Excel';
      }
    });
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
