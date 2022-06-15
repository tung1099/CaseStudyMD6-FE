import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Chart from 'chart.js/auto';
import {Wallet} from '../../model/wallet';
import {WalletService} from '../../service/wallet/wallet.service';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {FormControl, FormGroup} from '@angular/forms';
import {SweetAlertService} from '../../service/sweetAlert/sweet-alert.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  content = '';
  type: string;
  idUser: number;
  month1: string;
  year1: string;
  title = 'Biểu đồ';
  soDu: number;
  Year = [];
  Month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  Name = ['Số dư ', 'tổng chi tiêu'];
  Money = [];
  chart = [];
  wallet: Wallet[] = [];
  YearMonth: FormGroup = new FormGroup({
    year: new FormControl(),
    month: new FormControl(),
    wallet: new FormControl()
  });
  private result: any;
  constructor(
    private walletService: WalletService,
    private authService: AuthencicationService,
    private sweetAlertService: SweetAlertService,
  ) {
    this.idUser = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    for (let i = 2022; i < 3000 ; i++) {
      this.Year.push(i);
    }
    this.getAllWallet();
  }

  getAllWallet() {
    this.walletService.getAllByUserId(this.idUser).subscribe(wallet1 => {
        this.wallet = wallet1;
      },
      (error) => {
        console.log(error);
      });
  }

  get walletControl() {
    return this.YearMonth.get('wallet');
    console.log(this.YearMonth.get('wallet'));
  }

  get monthControl() {
    return this.YearMonth.get('month');
    console.log(this.YearMonth.get('month'));
  }

  get yearControl() {
    return this.YearMonth.get('year');
  }

  getInOut() {
    this.walletService.getInOut(this.walletControl.value, this.monthControl.value, this.yearControl.value).subscribe(list => {
      if (list.inFlow === 0 && list.outFlow === 0 ) {
        this.sweetAlertService.showNotification('error', 'Không có thu chi trong thời gian bạn chọn, vui lòng thử lại');
      } else {
        this.content = 'Biểu đồ thu chi';
        this.type = list.wallet.moneyType.name;
        this.month1 = 'Tổng thu tháng ' + list.year;
        this.year1 = 'năm ' + list.month + ': ';
        this.soDu = list.inFlow;
        this.Money.push(list.inFlow - list.outFlow);
        // this.Money.push(list.inFlow);
        this.Money.push(list.outFlow);
        console.log(this.Money);
        // @ts-ignore
        this.chart = new Chart('canvas', {
          type: 'pie',
          data: {
            labels: this.Name,
            datasets: [
              {
                data: this.Money,
                borderColor: '#FFFFFF',
                backgroundColor: [
                  '#FFFF66',
                  '#FF7F24',
                ],
                fill: true
              }
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
      }
    });
  }
}


