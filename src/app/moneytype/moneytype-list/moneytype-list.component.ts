import { Component, OnInit } from '@angular/core';
import {MoneyType} from '../../model/money-type';
import {MoneytypeService} from '../../service/moneytype/moneytype.service';

@Component({
  selector: 'app-moneytype-list',
  templateUrl: './moneytype-list.component.html',
  styleUrls: ['./moneytype-list.component.css']
})
export class MoneytypeListComponent implements OnInit {
  moneyTypes: MoneyType[] = [];

  constructor(private moneytypeService: MoneytypeService) { }

  ngOnInit() {
    this.getAllType();
  }
  getAllType() {
    this.moneytypeService.getAll().subscribe((data) => {
      this.moneyTypes = data;
    }, (error) => {
      alert(error);
    });
  }

}
