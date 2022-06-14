import { Component, OnInit } from '@angular/core';
// import {Chart, ChartType} from 'chart.js';
import {Data} from '../../model/data';
import Chart from 'chart.js/auto';
import {Wallet} from '../../model/wallet';
import {WalletService} from '../../service/wallet/wallet.service';
import {AuthencicationService} from '../../service/auth/authencication.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  idUser: number;
  title = 'Biểu đồ';
  data: Data[];
  Name = ['thu', 'chi'];
  Money = [2, 5];
  chart = [];
  wallet: Wallet[] = [];
  YearMonth: FormGroup = new FormGroup({
    year: new FormControl(),
    month: new FormControl(),
  });
  constructor(
    private walletService: WalletService,
    private authService: AuthencicationService,
  ) {
    this.idUser = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllWallet();
    // @ts-ignore
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: this.Name,
        datasets: [
          {
            data: this.Money,
            borderColor: '#3cba9f',
            backgroundColor: [
              '#3cb371',
              '#0000FF',
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

  getAllWallet() {
    this.walletService.getAllByUserId(this.idUser).subscribe(wallet1 => {
        this.wallet = wallet1;
      },
      (error) => {
        console.log(error);
      });
  }

  // getInOut() {
  //   this.walletService.getInOut(this.)
  // }
}


